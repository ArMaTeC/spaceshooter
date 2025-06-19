$ElevenLabsApiKey = "replace"
$OutputDirectory = ".\ActualSoundEffects"
<#
.SYNOPSIS
    Generates high-quality sound effects using the ElevenLabs API, with a
    configurable MAXIMUM duration for each individual sound.

.DESCRIPTION
    This definitive script provides fine-grained control over sound length.
    Each sound in the list has its own 'duration' property, which tells the
    API the maximum desired length. This allows short sounds like clicks to
    be short, while longer sounds like explosions can use more time, up to
    the specified cap.
#>

#================================================================================
# SCRIPT CONFIGURATION
#================================================================================


#================================================================================
# SOUND DATA (Each sound now has its own maximum 'duration' in seconds)
#================================================================================

$Sounds = @{
  # --- Short, sharp sounds (0.5 - 1.5s) ---
  playerShoot                 = @{ key = 'player_shoot_bullet'; prompt = "A short, crisp sci-fi laser pulse from a spaceship weapon"; duration = 1.0 }
  playerShootRailgun          = @{ key = 'player_shoot_railgun'; prompt = "A sharp, high-energy, metallic 'thwack' of a railgun firing a slug"; duration = 1.0 }
  playerShootCryo             = @{ key = 'player_shoot_cryo'; prompt = "A short, sharp 'psshht' of super-cooled gas from a cryo gun"; duration = 1.0 }
  playerHit                   = @{ key = 'player_hit'; prompt = "A short, sharp impact sound on a spaceship's energy shield"; duration = 0.8 }
  enemyHit                    = @{ key = 'enemy_hit'; prompt = "A short, dull impact sound for an enemy spaceship taking damage"; duration = 0.8 }
  enemyDie                    = @{ key = 'enemy_die_generic'; prompt = "A short, generic sci-fi explosion for a standard enemy spaceship"; duration = 1.5 }
  explosionSmall              = @{ key = 'explosion_small'; prompt = "A short, crisp sci-fi explosion"; duration = 1.5 }
  uiClick                     = @{ key = 'ui_click_generic'; prompt = "A simple, clean, short 'click' or 'tap' for a futuristic UI button"; duration = 0.5 }
  uiClickStartGame            = @{ key = 'ui_click_start_game'; prompt = "An engaging, positive 'confirm' sound for a Start Game button"; duration = 0.8 }
  uiClickSettings             = @{ key = 'ui_click_settings'; prompt = "A subtle, neutral 'click' for a settings menu"; duration = 0.5 }
  uiClickInfo                 = @{ key = 'ui_click_info'; prompt = "A soft, inquisitive 'blip' for an info panel"; duration = 0.6 }
  uiToggleSoundOn             = @{ key = 'ui_toggle_sound_on'; prompt = "A short, positive 'switch on'"; duration = 0.6 }
  uiToggleSoundOff            = @{ key = 'ui_toggle_sound_off'; prompt = "A short, slightly lower-pitched 'switch off'"; duration = 0.6 }
  playerGearShiftUp           = @{ key = 'player_gear_shift_up'; prompt = "A satisfying 'clunk' and 'whir-click' of a spaceship's gear system shifting up"; duration = 1.0 }
  playerGearShiftDown         = @{ key = 'player_gear_shift_down'; prompt = "A lower-pitched 'clunk' and 'click-whir' of a spaceship's gear system shifting down"; duration = 1.0 }
  powerUpCollectGeneric       = @{ key = 'powerup_collect_generic'; prompt = "A short, positive, shimmering, 'chime-like' sound for collecting a power-up"; duration = 1.2 }
  powerUpCollectWeapon        = @{ key = 'powerup_collect_weapon'; prompt = "A 'techy', 'weapon-arming', positive sound for collecting a new weapon"; duration = 1.2 }
  powerUpCollectHealth        = @{ key = 'powerup_collect_health'; prompt = "A soft, gentle, positive 'heal' or 'repair' sound for a health pack"; duration = 1.2 }
  powerUpCollectShield        = @{ key = 'powerup_collect_shield'; prompt = "A distinct 'shield-energizing' hum or forcefield activation"; duration = 1.2 }
  powerUpCollectUtility       = @{ key = 'powerup_collect_utility'; prompt = "A neutral-to-positive short 'bloop' or 'interface confirm' sound"; duration = 0.8 }
  powerUpActivateEMP          = @{ key = 'powerup_activate_emp'; prompt = "A powerful, short, electrical 'zap' with a slight bassy boom for an EMP burst"; duration = 1.5 }
  enemySpawn                  = @{ key = 'enemy_spawn'; prompt = "A short, eerie, futuristic 'warp-in' or 'materialize' for an enemy spaceship"; duration = 1.5 }

  # --- Medium sounds / Complex shots (up to 2s) ---
  playerShootRocket           = @{ key = 'player_shoot_rocket'; prompt = "A sci-fi rocket launching from a spaceship, with a quick whoosh and fiery ignition"; duration = 2.0 }
  playerShootHeatSeeking      = @{ key = 'player_shoot_heatseeking'; prompt = "A short, metallic launch with a subtle electronic whir of a heat-seeking missile"; duration = 1.8 }
  playerShootLightningCharged = @{ key = 'player_shoot_lightning_charged'; prompt = "A powerful, crackling electrical discharge from a lightning gun, with a build-up and a sharp release"; duration = 2.0 }
  playerShootPlasma           = @{ key = 'player_shoot_plasma'; prompt = "A distinct, 'gooey', energetic 'splat' of a plasma orb being fired"; duration = 1.5 }
  playerShootShotgun          = @{ key = 'player_shoot_shotgun'; prompt = "A punchy, multi-layered blast, like a futuristic sci-fi shotgun firing energy pellets"; duration = 1.8 }
  playerShootMinigun          = @{ key = 'player_shoot_minigun'; prompt = "A rapid, repeating, metallic 'brrt' of a sci-fi minigun firing quickly"; duration = 2.0 }
  playerShootGrenade          = @{ key = 'player_shoot_grenade'; prompt = "A grenade being launched from a tube, a 'phoomp' sound with a slight mechanical action"; duration = 1.5 }
  playerShootPulse            = @{ key = 'player_shoot_pulse'; prompt = "A soft, but distinct, 'thwoomp' from an energy pulse cannon"; duration = 1.5 }
  playerShootSwarm            = @{ key = 'player_shoot_swarm'; prompt = "Multiple small missiles launching in quick succession, with light 'fwoosh' sounds"; duration = 2.0 }
  playerShootHeavyRepeater    = @{ key = 'player_shoot_heavy_repeater'; prompt = "A heavy, impactful, deep 'thud-thud' from a heavy repeater cannon"; duration = 2.0 }
  playerDie                   = @{ key = 'player_die'; prompt = "A dramatic spaceship explosion, with metallic tearing and a final boom"; duration = 2.0 }
  enemyExplodeKamikaze        = @{ key = 'enemy_explode_kamikaze'; prompt = "A quick, intense explosion with a brief high-pitched whine before the boom"; duration = 2.0 }
  enemySplitterSplit          = @{ key = 'enemy_splitter_split'; prompt = "A unique, mechanical 'splitting' or 'tearing apart' sound"; duration = 1.8 }
  bossHit                     = @{ key = 'boss_hit'; prompt = "A heavy, resonant, metallic impact for a boss taking significant damage"; duration = 2.0 }
  bossVoidOrbFire             = @{ key = 'boss_void_orb_fire'; prompt = "A deep, ominous 'whoomp' of a dark energy void orb firing"; duration = 2.0 }
  explosionLarge              = @{ key = 'explosion_large'; prompt = "A deep, resonant, slightly longer sci-fi explosion with bass"; duration = 2.0 }
  gameStart                   = @{ key = 'game_start_sequence'; prompt = "An uplifting, short musical sting or 'power-up sequence'"; duration = 2.0 }
  gameOver                    = @{ key = 'game_over_sequence'; prompt = "A slightly melancholic 'game over', a short, fading musical motif or system shutdown"; duration = 2.0 }

  # --- Longer / Continuous sounds (capped at 2s) ---
  laserBeamActive             = @{ key = 'laser_beam_active'; prompt = "A continuous, humming, energetic, focused, and dangerous sci-fi laser beam"; duration = 2.0 }
  laserBeamStop               = @{ key = 'laser_beam_stop'; prompt = "A continuous laser beam abruptly stopping, with a quick power-down whir"; duration = 1.0 }
  playerThrust                = @{ key = 'player_thrust_normal'; prompt = "A soft, continuous, low-frequency rumbling of a spaceship engine"; duration = 2.0 }
  playerAfterburner           = @{ key = 'player_thrust_afterburner'; prompt = "A powerful, roaring, energetic sci-fi engine afterburner"; duration = 2.0 }
  bossSpawn                   = @{ key = 'boss_spawn'; prompt = "A dramatic, imposing, complex 'warp-in' for a large boss appearing"; duration = 2.0 }
  bossDefeat                  = @{ key = 'boss_defeat'; prompt = "A large, multi-layered, prolonged explosion with debris for a boss being destroyed"; duration = 2.0 }
  bossLaserCharge             = @{ key = 'boss_laser_charge'; prompt = "A rising, intensifying whirring sound of a powerful laser weapon charging up"; duration = 2.0 }
  bossLaserFire               = @{ key = 'boss_laser_fire'; prompt = "A very powerful, sustained, destructive sci-fi laser beam firing"; duration = 2.0 }
}

#================================================================================
# SCRIPT EXECUTION LOGIC
#================================================================================

if ($ElevenLabsApiKey -eq "PASTE_YOUR_ELEVENLABS_API_KEY_HERE" -or -not $ElevenLabsApiKey) {
    Write-Host "!!! ERROR: ElevenLabs API Key is not set." -ForegroundColor Red; exit
}
if (-not (Test-Path -Path $OutputDirectory)) {
    New-Item -Path $OutputDirectory -ItemType Directory | Out-Null
}

$apiUrl = "https://api.elevenlabs.io/v1/sound-generation"
$apiHeaders = @{ "xi-api-key" = $ElevenLabsApiKey }
$totalSounds = $Sounds.Count
$currentSound = 1

Write-Host "--- Using Professional ElevenLabs API for Sound Effects ---" -ForegroundColor Cyan

foreach ($sound in $Sounds.GetEnumerator()) {
    $soundName = $sound.Name
    $fileName = "$($sound.Value.key).mp3"
    $promptText = $sound.Value.prompt
    $outputFilePath = Join-Path -Path $OutputDirectory -ChildPath $fileName
    # ** Get the specific duration for this sound **
    $maxDuration = $sound.Value.duration

    Write-Host "----------------------------------------------------------------"
    Write-Host "($currentSound/$totalSounds) Processing: $soundName" -ForegroundColor Yellow

    if (Test-Path $outputFilePath) {
        Write-Host "  -> File '$fileName' already exists. Skipping." -ForegroundColor DarkGray
        $currentSound++; continue
    }

    # ** MODIFIED: Add the per-sound 'duration_seconds' to the request body. **
    $predictionBody = @{
        text = $promptText
        duration_seconds = $maxDuration
    } | ConvertTo-Json
    
    Write-Host "  -> Sending prompt for a sound up to $($maxDuration)s: `"$promptText`""
    try {
        Invoke-WebRequest -Uri $apiUrl -Method Post -Headers $apiHeaders -Body $predictionBody -ContentType "application/json" -TimeoutSec 300 -OutFile $outputFilePath
        Write-Host "  -> SUCCESS! Audio generated and saved to '$outputFilePath'" -ForegroundColor Green
    } catch {
        Write-Host "  -> FATAL ERROR: The API call failed." -ForegroundColor Red
        $errorResponse = $_.Exception.Response
        if ($null -ne $errorResponse) {
            $statusCode = [int]$errorResponse.StatusCode
            $stream = $errorResponse.GetResponseStream(); $reader = New-Object System.IO.StreamReader($stream); $errorBody = $reader.ReadToEnd()
            Write-Host "     Status Code: $statusCode" -ForegroundColor Red
            Write-Host "     Details: $errorBody" -ForegroundColor Red
        } else {
            Write-Host "     Details: $($_.Exception.Message)" -ForegroundColor Red
        }
    }

    Start-Sleep -Seconds 2
    $currentSound++
}

Write-Host "----------------------------------------------------------------" -ForegroundColor Green
Write-Host "All sounds processed. Script finished." -ForegroundColor Green