import { DynamicModule, Module } from "@nestjs/common";
import { StoreService } from "./store.service";
import { StoreConfig, StoreFeatureConfig, StoreRootConfig } from "./store.config";
let rootStoreConfig: StoreConfig;
const DEFAULT_DIR_NAME ="store";
const DEFAULT_FILE_NAME = "data.json";
@Module({})
export class StoreModule {
    static forRoot(config?: StoreRootConfig): DynamicModule {
        return {
            // name of module
            module: StoreModule,
            providers: [StoreService, {
                provide: "STORE_CONFIG",
                useValue: config
            }],
            exports: [StoreService]
        };
    };
    static forFeature(config: StoreFeatureConfig): DynamicModule {
        return {
            // name of module
            module: StoreModule,
            providers: [StoreService, {
                provide: "STORE_CONFIG",
                useValue: config
            }],
            exports: [StoreService]
        };
    }

}