
import { DynamicModule, Module } from "@nestjs/common";
import { StoreService } from "./store.service";
import { StoreConfig, StoreFeatureConfig, StoreRootConfig } from "./store.config";
let rootStoreConfig: StoreConfig;
const DEFAULT_DIR_NAME ="storage";
const DEFAULT_FILE_NAME = "data.json";
@Module({
})
export class StoreModule {
    static forRoot(config?: StoreRootConfig): DynamicModule {
        rootStoreConfig = StoreModule.createConfig(config);
        return {
            // name of module
            module: StoreModule,
            providers: [StoreService, {
                provide: "STORE_CONFIG",
                useValue: rootStoreConfig
            }]
        };
    };
    static forFeature(config: StoreFeatureConfig): DynamicModule {
        
        return {
            // name of module
            module: StoreModule,
            providers: [{
                provide: "STORE_SERVICE",
                useFactory:() =>{
                    const featureStoreConfig = StoreModule.createConfig({...rootStoreConfig, ...config});
                    return new StoreService(featureStoreConfig);
                } 
            }],
            exports: ["STORE_SERVICE"]
        };
    }
    private static createConfig(config: StoreConfig) {
        const defaultConfig: StoreConfig = {
            dirName: DEFAULT_DIR_NAME,
            fileName: DEFAULT_FILE_NAME
        }
        return {...defaultConfig, ...config};
    }
};

