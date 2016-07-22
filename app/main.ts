import 'reflect-metadata';
require('../node_modules/zone.js/dist/zone');
require('../node_modules/zone.js/dist/long-stack-trace-zone');
require('font-awesome-webpack');

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './mapa/mapa';

import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

bootstrap(AppComponent, [ Title, GOOGLE_MAPS_PROVIDERS ]);