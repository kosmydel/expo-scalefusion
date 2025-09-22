import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoScalefusionModule extends NativeModule {
  canAccessAPI(): boolean;
}

export default requireNativeModule<ExpoScalefusionModule>('ExpoScalefusion');
