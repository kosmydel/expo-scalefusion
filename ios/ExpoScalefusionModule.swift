import ExpoModulesCore

public class ExpoScalefusionModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoScalefusion")

    Function("canAccessAPI") {
      return false
    }
  }
}
