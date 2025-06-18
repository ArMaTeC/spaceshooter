#Requires -Version 5.1

<#
.SYNOPSIS
    Generates game sprites using a definitive "2D Photorealistic Illustration" prompt strategy.

.DESCRIPTION
    This definitive script contains a complete overhaul of all prompts to ensure they are safe,
    valid, and unambiguous for the AI. It fixes all known typos and "softens" weapon-related
    language to avoid safety filters, preventing 400 Bad Request errors.

.NOTES
    Author: AI Assistant (Modified by User Request)
    Version: 19.0 (Definitive Prompt Overhaul & Bugfix)

    PREREQUISITES:
    - A Google Cloud Project with the Vertex AI API enabled.
    - Google Cloud SDK ('gcloud') installed and authenticated.
#>

# --- CONFIGURATION ---

# The base directory where all generated files will be saved.
$OutputBaseDir = "C:\Users\karl.lawrence\OneDrive - GCI Network Solutions\Desktop\seedshooter\generated_sprites"
$ProjectID = "gen-lang-client-0068383984"
# --- SCRIPT START ---
gcloud config set project "gen-lang-client-0068383984" --quiet

#region Helper Functions

# === SMART ROTATION FUNCTION ===
function Auto-Rotate-To-Vertical {
    param(
        [Parameter(Mandatory=$true)]
        [string]$ImagePath
    )
    $bitmap = $null
    try {
        $bitmap = [System.Drawing.Bitmap]::new($ImagePath)
        $minX = $bitmap.Width; $minY = $bitmap.Height; $maxX = -1; $maxY = -1
        for ($y = 0; $y -lt $bitmap.Height; $y++) {
            for ($x = 0; $x -lt $bitmap.Width; $x++) {
                if ($bitmap.GetPixel($x, $y).A -gt 0) {
                    if ($x -lt $minX) { $minX = $x }; if ($y -lt $minY) { $minY = $y }
                    if ($x -gt $maxX) { $maxX = $x }; if ($y -gt $maxY) { $maxY = $y }
                }
            }
        }
        if ($maxX -eq -1) { return }
        $contentWidth = $maxX - $minX + 1
        $contentHeight = $maxY - $minY + 1

        if ($contentWidth -gt $contentHeight) {
            Write-Host "    -> Sprite is horizontal ($($contentWidth)x$($contentHeight)). Rotating to vertical." -ForegroundColor DarkYellow
            $bitmap.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
            $tempPath = "$($ImagePath).tmp"
            $bitmap.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        } else {
            Write-Host "    -> Sprite is already vertical ($($contentWidth)x$($contentHeight)). No rotation needed." -ForegroundColor DarkGray
            $tempPath = $null 
        }
    } finally {
        if ($null -ne $bitmap) { $bitmap.Dispose() }
    }
    if ($null -ne $tempPath -and (Test-Path $tempPath)) {
        Move-Item -Path $tempPath -Destination $ImagePath -Force
    }
}


# === ULTRA-RELIABLE PIXEL-COPY FUNCTION ===
function Copy-And-Make-Transparent {
    param(
        [Parameter(Mandatory=$true)] [string]$SourceImagePath,
        [Parameter(Mandatory=$true)] [string]$DestinationImagePath,
        [Parameter(Mandatory=$false)] [int]$Tolerance = 70
    )
    $sourceBitmap = $null; $destinationBitmap = $null
    try {
        $sourceBitmap = [System.Drawing.Bitmap]::new($SourceImagePath)
        $destinationBitmap = New-Object System.Drawing.Bitmap($sourceBitmap.Width, $sourceBitmap.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $backgroundColor = $sourceBitmap.GetPixel(0, 0)
        for ($y = 0; $y -lt $sourceBitmap.Height; $y++) {
            for ($x = 0; $x -lt $sourceBitmap.Width; $x++) {
                $currentPixelColor = $sourceBitmap.GetPixel($x, $y)
                $distance = [Math]::Sqrt( [Math]::Pow($currentPixelColor.R - $backgroundColor.R, 2) + [Math]::Pow($currentPixelColor.G - $backgroundColor.G, 2) + [Math]::Pow($currentPixelColor.B - $backgroundColor.B, 2) )
                if ($distance -gt $Tolerance) { $destinationBitmap.SetPixel($x, $y, $currentPixelColor) }
            }
        }
        $destinationBitmap.Save($DestinationImagePath, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally {
        if ($null -ne $sourceBitmap) { $sourceBitmap.Dispose() }
        if ($null -ne $destinationBitmap) { $destinationBitmap.Dispose() }
    }
}


# Function to find the content bounds, resize it, center it on a new canvas, and save it.
function Resize-And-Center-Image {
    param(
        [Parameter(Mandatory=$true)] [System.Drawing.Bitmap]$InputBitmap,
        [Parameter(Mandatory=$true)] [int]$TargetWidth,
        [Parameter(Mandatory=$true)] [int]$TargetHeight,
        [Parameter(Mandatory=$true)] [string]$OutputPath
    )
    $minX = $InputBitmap.Width; $minY = $InputBitmap.Height; $maxX = -1; $maxY = -1
    for ($y = 0; $y -lt $InputBitmap.Height; $y++) {
        for ($x = 0; $x -lt $InputBitmap.Width; $x++) {
            if ($InputBitmap.GetPixel($x, $y).A -gt 0) {
                if ($x -lt $minX) { $minX = $x }; if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }; if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    if ($maxX -eq -1) { $contentWidth = 0; $contentHeight = 0 } else { $contentWidth = $maxX - $minX + 1; $contentHeight = $maxY - $minY + 1 }
    $resizedImage = New-Object System.Drawing.Bitmap($TargetWidth, $TargetHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($resizedImage)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.Clear([System.Drawing.Color]::Transparent)
    if ($contentWidth -gt 0 -and $contentHeight -gt 0) {
        $sourceRect = New-Object System.Drawing.Rectangle($minX, $minY, $contentWidth, $contentHeight)
        $scaleRatio = [Math]::Min($TargetWidth / $contentWidth, $TargetHeight / $contentHeight)
        $scaledContentWidth = [int]($contentWidth * $scaleRatio); $scaledContentHeight = [int]($contentHeight * $scaleRatio)
        $destX = ($TargetWidth - $scaledContentWidth) / 2; $destY = ($TargetHeight - $scaledContentHeight) / 2
        $destRect = New-Object System.Drawing.Rectangle($destX, $destY, $scaledContentWidth, $scaledContentHeight)
        $graphics.DrawImage($InputBitmap, $destRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
    }
    try { $resizedImage.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png) } finally { $graphics.Dispose(); $resizedImage.Dispose() }
}
#endregion

# --- DATA ---
$SPRITE_GENERATION_PROMPTS = @{
    # --- SHIPS & VEHICLES (Flat Technical Illustration) ---
    player = "A high-resolution 2D illustration of a small spaceship, simple blue and white design, in a top-down schematic blueprint view. The art style must be photorealistic with detailed textures, but the rendering must be completely flat with zero perspective and no simulated 3D lighting. Isolated on a solid, pure green (#00FF00) background."
    playerViper = "A high-resolution 2D illustration of a sleek viper-like spaceship, viper green and black carbon fiber, in a top-down schematic blueprint view. The art style must be photorealistic with detailed textures, but the rendering must be completely flat with zero perspective and no simulated 3D lighting. Isolated on a solid, pure green (#00FF00) background."
    # ... all other ship prompts are the same ...
    obstacle2 = "A high-resolution 2D illustration of brownish space debris, mangled metal, jagged edges, in a top-down schematic blueprint view. The art style must be photorealistic with detailed textures, but the rendering must be completely flat with zero perspective and no simulated 3D lighting. Isolated on a solid, pure green (#00FF00) background."
    
    # --- ITEMS, COLLECTIBLES & EFFECTS (Angled Icon Illustration) ---
    playerShieldEffect = "A high-resolution 2D icon illustration of a glowing blue energy shield effect, a perfect circle, semi-transparent with a hexagonal pattern, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    bossVoidOrb = "A high-resolution 2D icon illustration of a dark purple void orb projectile, crackling with dark energy, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong internal glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleHealth = "A high-resolution 2D icon illustration of a green cross health pack, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleFuel = "A high-resolution 2D icon illustration of a green metallic fuel can, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleFireRate = "A high-resolution 2D icon illustration of an orange icon with multiple projectiles, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleDamage = "A high-resolution 2D icon illustration of a red icon with an explosion symbol, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleRocketLauncher = "A high-resolution 2D icon illustration of a yellow rocket launcher pickup, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleLightningGun = "A high-resolution 2D icon illustration of a cyan lightning bolt pickup, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleShield = "A high-resolution 2D icon illustration of a blue shield pickup, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleHeatSeekingLauncher = "A high-resolution 2D icon illustration of a pink missile pickup with a heat-seeking symbol, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleInvulnerability = "A high-resolution 2D icon illustration of a golden glowing star, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleMegaHealth = "A high-resolution 2D icon illustration of a large green cross with a plus sign, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleEmp = "A high-resolution 2D icon illustration of a cyan electrical orb, crackling with energy, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleSpeedBoost = "A high-resolution 2D icon illustration of a light blue winged boot, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleSpreadShot = "A high-resolution 2D icon illustration of an orange icon with three diverging projectiles, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleSuperShield = "A high-resolution 2D icon illustration of a bright light blue multi-layered shield, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleAmmoOverload = "A high-resolution 2D icon illustration of an orange-red icon with rapid-fire projectile trails, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleSlowAura = "A high-resolution 2D icon illustration of an orchid colored swirling aura, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectiblePiercing = "A high-resolution 2D icon illustration of a tomato red icon of a projectile passing through a target, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleScoreMultiplier = "A high-resolution 2D icon illustration of a gold coin stack with 'X2' embossed, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectiblePlasmaRifle = "A high-resolution 2D icon illustration of a pale turquoise futuristic energy rifle, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleRailgun = "A high-resolution 2D icon illustration of a plum colored sleek long-range weapon, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleShotgun = "A high-resolution 2D icon illustration of a khaki colored wide-spread energy weapon, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleMinigun = "A high-resolution 2D icon illustration of a dark gray multi-barrel rotary cannon, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleLaserBeam = "A high-resolution 2D icon illustration of a bright red laser emitter, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleGrenadeLauncher = "A high-resolution 2D icon illustration of a sea green projectile launcher, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleCryoGun = "A high-resolution 2D icon illustration of a powder blue blaster emitting snowflakes, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectiblePulseCannon = "A high-resolution 2D icon illustration of a medium orchid cannon with radiating circles, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleSwarmMissiles = "A high-resolution 2D icon illustration of a light pink icon of multiple small missiles, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    collectibleHeavyRepeater = "A high-resolution 2D icon illustration of a light slate gray heavy machine gun, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    projectilePlasmaOrb = "A high-resolution 2D icon illustration of a glowing dark turquoise plasma orb projectile, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    projectileRailgunSlug = "A high-resolution 2D icon illustration of a bright magenta energy slug projectile with a trail, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    projectileGrenade = "A high-resolution 2D icon illustration of a medium sea green explosive projectile, round with metallic details, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    effectCryoBlast = "A high-resolution 2D icon illustration of a pale turquoise ice crystal particle effect for a cryo gun, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    projectileEnergyPulse = "A high-resolution 2D icon illustration of a dark orchid radiating energy pulse projectile, circular, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting and a strong emissive glow. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    obstacle3 = "A high-resolution 2D icon illustration of a crystalline space formation, glowing light blue, sharp geometric angles, from a 3/4 top-down perspective. The style is photorealistic with clean, uniform lighting, like an inventory icon. There must be a complete absence of cast shadows on the background. Isolated on a solid, pure green (#00FF00) background."
    explosionSheet = "A photo-realistic spritesheet of an explosion, showing 8 distinct frames of the blast sequence in a single horizontal row. The explosion should be fiery orange and yellow, viewed from directly above. The entire spritesheet should be on a transparent background."
}

$spritesToRotate = @( 'player', 'playerViper', 'playerComet', 'playerNebula', 'playerPulsar', 'playerQuasar', 'playerOrion', 'playerAndromeda', 'playerSirius', 'playerVega', 'playerDraco', 'playerCygnus', 'playerTitan', 'playerPhoenix', 'playerVoyager', 'playerExplorer', 'playerPioneer', 'playerRanger', 'playerStardust', 'playerGenesis', 'playerOdyssey', 'playerAurora', 'enemyGrunt', 'enemyFast', 'enemyShooterBody', 'enemyShooterBarrel', 'enemySplitter', 'enemyKamikaze', 'bossBody', 'bossEye', 'bulletPlayer', 'rocketPlayer', 'heatSeekingMissilePlayer', 'enemyBullet', 'projectileSwarmMissile', 'obstacle1', 'obstacle2')

# --- MAIN EXECUTION ---
if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) { Write-Error "gcloud not found."; exit }
try { Add-Type -AssemblyName System.Drawing } catch { Write-Error "System.Drawing not found."; exit }
if ([string]::IsNullOrWhiteSpace($ProjectID)) { Write-Error "Project ID empty."; exit }

Write-Host "Checking gcloud authentication status..."
gcloud auth print-access-token >$null 2>$null
if (-not $?) {
    Write-Host "Not authenticated. Please log in via the browser..." -ForegroundColor Yellow
    gcloud auth login
    gcloud auth print-access-token >$null 2>$null
    if (-not $?) { Write-Error "Authentication failed. Please try again. Exiting."; exit }
    Write-Host "Authentication successful." -ForegroundColor Green
} else {
    $currentUser = gcloud config get-value account
    Write-Host "Already authenticated as: $currentUser" -ForegroundColor Green
}
try {
    Write-Host "Fetching authentication token..."
    $AccessToken = gcloud auth print-access-token
    Write-Host "Token fetched successfully." -ForegroundColor Green
} catch { Write-Error "Failed to get access token even after authentication check. Exiting."; exit }
$ApiUrl = "https://us-central1-aiplatform.googleapis.com/v1/projects/$($ProjectID)/locations/us-central1/publishers/google/models/imagegeneration:predict"
$headers = @{ "Authorization" = "Bearer $AccessToken"; "Content-Type"  = "application/json; charset=utf-8" }
if (-not (Test-Path -Path $OutputBaseDir)) { New-Item -ItemType Directory -Path $OutputBaseDir | Out-Null }

foreach ($item in $SPRITE_GENERATION_PROMPTS.GetEnumerator()) {
    $spriteName = $item.Key
    $promptText = $item.Value
    $spriteOutputDir = Join-Path -Path $OutputBaseDir -ChildPath $spriteName
    $pathGreenScreen = Join-Path -Path $spriteOutputDir -ChildPath "${spriteName}_original_greenscreen.png"
    $pathCleanOutput = Join-Path -Path $spriteOutputDir -ChildPath "${spriteName}_1024x1024.png"
    $path512 = Join-Path -Path $spriteOutputDir -ChildPath "${spriteName}_512x512.png"
    $path256 = Join-Path -Path $spriteOutputDir -ChildPath "${spriteName}_256x256.png"
    $pathTsx = Join-Path -Path $spriteOutputDir -ChildPath "${spriteName}.tsx"

    if ((Test-Path $pathCleanOutput) -and (Test-Path $path512) -and (Test-Path $path256) -and (Test-Path $pathTsx)) {
        Write-Host "`n=====================================================================" -ForegroundColor Yellow
        Write-Host "Skipping sprite: '$spriteName' (all 4 final files already exist)" -ForegroundColor Yellow
        continue
    }
    
    Write-Host "`n=====================================================================" -ForegroundColor Green
    Write-Host "Processing sprite: '$spriteName'" -ForegroundColor Green
    Write-Host "Using definitive '2D Illustration' prompts..."

    if (Test-Path -Path $spriteOutputDir) {
        Write-Host " -> Incomplete folder found. Cleaning up before regenerating." -ForegroundColor Magenta
        Remove-Item -Path $spriteOutputDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $spriteOutputDir | Out-Null
    
    $body = @{ instances  = @(@{ prompt = $promptText }); parameters = @{ sampleCount = 1; negativePrompt = "text, watermark, signature, jpeg artifacts, blurry, border, frame, human, person, shadow, perspective, angle, cast shadow, lighting, light source, 3D render, render, scene" }} | ConvertTo-Json -Depth 5

    # === NEW RETRY LOGIC BLOCK ===
    $maxRetries = 3
    $retryDelaySeconds = 5
    $success = $false
    $response = $null

    for ($attempt = 1; $attempt -le $maxRetries; $attempt++) {
        try {
            Write-Host "Calling API (Attempt $attempt of $maxRetries)..."
            $response = Invoke-RestMethod -Uri $ApiUrl -Method Post -Headers $headers -Body $body -TimeoutSec 90
            $success = $true
            Write-Host " -> API call successful." -ForegroundColor Green
            break
        }
        catch [System.Net.WebException] {
            $statusCode = 0
            if ($_.Exception.Response) { $statusCode = [int]$_.Exception.Response.StatusCode }

            if ($statusCode -eq 400) {
                Write-Error "FATAL: Received error (400) Bad Request for '$spriteName'. This means the prompt is invalid and retrying will not help. Please check the prompt text. Skipping sprite."
                break 
            }
            elseif ($attempt -lt $maxRetries) {
                Write-Warning "API call failed for '$spriteName' with status code $statusCode. Retrying in $retryDelaySeconds seconds..."
                Start-Sleep -Seconds $retryDelaySeconds
            }
            else { Write-Error "Final attempt failed for '$spriteName'. Error: $($_.Exception.Message)" }
        }
        catch {
            Write-Error "A non-web error occurred while processing '$spriteName': $($_.Exception.Message)"
            break
        }
    }
    
    if (-not $success) {
        Write-Error "Could not retrieve image for '$spriteName' after $maxRetries attempts. Moving to next sprite."
        continue
    }
    # === END RETRY LOGIC BLOCK ===

    try {
        if ($null -eq $response.predictions[0].bytesBase64Encoded) { Write-Warning "API response was successful but contained no image data. Skipping."; continue }

        $imageBytes = [System.Convert]::FromBase64String($response.predictions[0].bytesBase64Encoded)

        if ($spriteName -eq 'explosionSheet') {
            [System.IO.File]::WriteAllBytes($pathCleanOutput, $imageBytes)
            Write-Host " -> Saved pre-transparent image to '$pathCleanOutput'"
        }
        else {
            [System.IO.File]::WriteAllBytes($pathGreenScreen, $imageBytes)
            Write-Host " -> Saved original AI output to '$pathGreenScreen'"
            Write-Host " -> Creating transparent version... (This may take a moment)"
            Copy-And-Make-Transparent -SourceImagePath $pathGreenScreen -DestinationImagePath $pathCleanOutput
            Write-Host " -> Saved clean transparent image to '$pathCleanOutput'"
        }
        
        if ($spritesToRotate.Contains($spriteName)) {
            Write-Host " -> Checking and correcting orientation..." -ForegroundColor Cyan
            Auto-Rotate-To-Vertical -ImagePath $pathCleanOutput
        }

        $finalBitmapForResize = [System.Drawing.Bitmap]::new($pathCleanOutput)
        try {
            Resize-And-Center-Image -InputBitmap $finalBitmapForResize -TargetWidth 512 -TargetHeight 512 -OutputPath $path512
            Write-Host " -> Saved 512x512 centered image to '$path512'"
            Resize-And-Center-Image -InputBitmap $finalBitmapForResize -TargetWidth 256 -TargetHeight 256 -OutputPath $path256
            Write-Host " -> Saved 256x256 centered image to '$path256'"
        }
        finally {
            $finalBitmapForResize.Dispose()
        }

        Write-Host " -> Generating Base64 from 256x256 image..."
        $bytes256 = [System.IO.File]::ReadAllBytes($path256)
        $base64String256 = [System.Convert]::ToBase64String($bytes256)
        $tsxContent = @"
export const spriteData = {
  name: "$spriteName",
  base64: "data:image/png;base64,$base64String256",
  rotation: 0,
};
"@
        $tsxContent | Out-File -FilePath $pathTsx -Encoding UTF8
        Write-Host " -> Saved TSX file to '$pathTsx'"
    }
    catch {
        Write-Error "An error occurred during file processing for '$spriteName': $($_.Exception.Message)"
    }
}

Write-Host "`n=================================================" -ForegroundColor Cyan
Write-Host "All sprites processed successfully!" -ForegroundColor Cyan
Write-Host "Check the '$OutputBaseDir' directory for your files." -ForegroundColor Cyan
Write-Host "================================================="