import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import Map from '@arcgis/core/Map';
import ElevationLayer from '@arcgis/core/layers/ElevationLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import SceneView from '@arcgis/core/views/SceneView';
import LayerList from '@arcgis/core/widgets/LayerList';

@Component({
  selector: 'app-mars-map',
  templateUrl: './mars-map.component.html',
  styleUrls: ['./mars-map.component.scss'],
})

/**
 * MarsMapComponent
 *
 * Angular component for displaying a 3D map of Mars using ArcGIS API.
 *
 * @license copyrights "ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri, JPL, DLR"
 */
export class MarsMapComponent implements OnInit, OnDestroy {
  /**
   * Reference to the map view element.
   */
  @ViewChild('mapView', { static: true }) private mapViewEl!: ElementRef;

  private view: any;

  /**
   * ngOnInit
   *
   * Initializes the MarsMapComponent.
   */
  async ngOnInit(): Promise<void> {
    if (this.mapViewEl) {
      try {
        // Elevation layer for Mars
        const marsElevation = new ElevationLayer({
          url: 'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDEM200M/ImageServer',
          copyright:
            'NASA, ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri',
        });

        // Imagery layer for Mars
        const marsImagery = new TileLayer({
          url: 'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer',
          title: 'Imagery',
          copyright: 'USGS Astrogeology Science Center, NASA, JPL, Esri',
        });

        // Create the map with elevation and imagery layers
        const map = new Map({
          ground: {
            layers: [marsElevation],
          },
          layers: [marsImagery],
        });

        // Create the SceneView for the map
        this.view = new SceneView({
          map: map,
          container: this.mapViewEl.nativeElement,
          qualityProfile: 'high',
          spatialReference: {
            wkid: 104971,
          },
          camera: {
            position: {
              x: 27.63423,
              y: -6.34466,
              z: 1281525.766,
              spatialReference: {
                wkid: 104971,
              },
            },
            heading: 332.28,
            tilt: 37.12,
          },
        });

        // Feature layer for displaying craters on Mars
        const cratersLayer = new FeatureLayer({
          url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Mars_Nomenclature_Mountains/FeatureServer',
          definitionExpression: "type = 'Crater, craters'",
          title: 'Craters',
          renderer: {
            type: 'simple',
            symbol: {
              type: 'polygon-3d',
              symbolLayers: [
                {
                  type: 'fill',
                  material: { color: [255, 255, 255, 0.1] },
                  outline: {
                    color: [0, 0, 0, 0.4],
                    size: 2,
                  },
                },
              ],
            },
          } as any,
          labelingInfo: [
            {
              labelPlacement: 'above-center',
              labelExpressionInfo: { expression: '$feature.NAME' },
              symbol: {
                type: 'label-3d',
                symbolLayers: [
                  {
                    type: 'text',
                    material: {
                      color: [0, 0, 0, 0.9],
                    },
                    halo: {
                      size: 2,
                      color: [255, 255, 255, 0.7],
                    },
                    font: {
                      size: '10px',
                    },
                  } as any,
                ],
                verticalOffset: {
                  screenLength: 40,
                  maxWorldLength: 500000,
                  minWorldLength: 0,
                },
                callout: {
                  type: 'line',
                  size: 0.5,
                  color: [255, 255, 255, 0.9],
                  border: {
                    color: [0, 0, 0, 0.3],
                  },
                },
              },
            },
          ],
        });

        // Add the craters layer to the map
        map.add(cratersLayer);

        const shadedReliefLayer = new TileLayer({
          url: 'https://astro.arcgis.com/arcgis/rest/services/OnMars/MColorDEM/MapServer',
          copyright:
            'USGS Astrogeology Science Center, NASA, JPL, ESA, DLR, Esri',
          title: 'Shaded relief',
          visible: false,
        });

        // Add the shaded relief layer to the map
        map.add(shadedReliefLayer);

        // Layer list widget for displaying and controlling layers
        const layerList = new LayerList({
          view: this.view,
        });

        // Add the layer list widget to the top-right corner of the view
        this.view.ui.add(layerList, 'top-right');
      } catch (error) {
        console.error('Error loading ArcGIS modules:', error);
      }
    } else {
      console.error(
        'mapViewEl is undefined. Make sure the element is available.'
      );
    }
  }

  /**
   * ngOnDestroy
   *
   * Cleans up resources when the component is destroyed.
   */
  ngOnDestroy(): void {
    if (this.view) {
      this.view.container = null;
    }
  }
}
