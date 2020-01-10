<?php

namespace ReedJones\PhasePreset;

use Illuminate\Support\ServiceProvider;
use Laravel\Ui\UiCommand;
use ReedJones\PhasePreset\PhasePreset;

class PhasePresetServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        UiCommand::macro('phase', function (UiCommand $command) {
            PhasePreset::install($command);

            $command->info('Preset Complete! Build something amazing!');
        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
