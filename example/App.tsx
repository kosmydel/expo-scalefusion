import ExpoScalefusion from "expo-scalefusion";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Scalefusion API Example</Text>
        <Group name="Device Information">
          <Text>
            {ExpoScalefusion.canAccessAPI()
              ? "API is accessible"
              : "API is not accessible"}
          </Text>
          <ActionButton
            name="isEnrolled"
            onPress={() => ExpoScalefusion.isEnrolled()}
          />
          <ActionButton
            name="isManaged"
            onPress={() => ExpoScalefusion.isManaged()}
          />
          <ActionButton
            name="deviceId"
            onPress={() => ExpoScalefusion.deviceId()}
          />
          <ActionButton
            name="buildSerialNumber"
            onPress={() => ExpoScalefusion.buildSerialNumber()}
          />
        </Group>

        <Group name="WiFi Controls">
          <ActionButton
            name="launchWifiSupported"
            onPress={() => ExpoScalefusion.launchWifiSupported()}
          />
          <ToggleButton
            name="Toggle WiFi"
            onToggle={(enabled) => ExpoScalefusion.toggleWifi(enabled)}
          />
        </Group>

        <Group name="Mobile Data Controls">
          <ActionButton
            name="toggleMobileDataSupported"
            onPress={() => ExpoScalefusion.toggleMobileDataSupported()}
          />
          <ToggleButton
            name="Toggle Mobile Data"
            onToggle={(enabled) => ExpoScalefusion.toggleMobileData(enabled)}
          />
        </Group>

        <Group name="Hotspot Controls">
          <ActionButton
            name="toggleHotspotSupported"
            onPress={() => ExpoScalefusion.toggleHotspotSupported()}
          />
          <ToggleButton
            name="Toggle Hotspot"
            onToggle={(enabled) => ExpoScalefusion.toggleHotspot(enabled)}
          />
        </Group>

        <Group name="Flight Mode Controls">
          <ActionButton
            name="toggleFlightModeSupported"
            onPress={() => ExpoScalefusion.toggleFlightModeSupported()}
          />
          <ToggleButton
            name="Toggle Flight Mode"
            onToggle={(enabled) => ExpoScalefusion.toggleFlightMode(enabled)}
          />
        </Group>

        <Group name="Status Bar Controls">
          <ActionButton
            name="toggleStatusBarSupported"
            onPress={() => ExpoScalefusion.toggleStatusBarSupported()}
          />
          <ToggleButton
            name="Toggle Status Bar"
            onToggle={(enabled) => ExpoScalefusion.toggleStatusBar(enabled)}
          />
        </Group>

        <Group name="Device Power Controls">
          <ActionButton
            name="rebootSupported"
            onPress={() => ExpoScalefusion.rebootSupported()}
          />
          <ActionButton
            name="rebootDevice"
            onPress={() => ExpoScalefusion.rebootDevice()}
          />
          <ActionButton
            name="powerOffSupported"
            onPress={() => ExpoScalefusion.powerOffSupported()}
          />
          <ActionButton
            name="powerOffDevice"
            onPress={() => ExpoScalefusion.powerOffDevice()}
          />
        </Group>

        <Group name="Device Lock Controls">
          <ActionButton
            name="isLockDeviceSupported"
            onPress={() => ExpoScalefusion.isLockDeviceSupported()}
          />
          <ActionButton
            name="lockDevice"
            onPress={() => ExpoScalefusion.lockDevice()}
          />
          <ToggleButton
            name="Toggle Management State"
            onToggle={(enabled) =>
              ExpoScalefusion.toggleManagementState(enabled)
            }
          />
        </Group>

        <Group name="System Controls">
          <ActionButton
            name="refreshPolicies"
            onPress={() => ExpoScalefusion.refreshPolicies()}
          />
        </Group>

        <Group name="Timezone Controls">
          <ActionButton
            name="canControlTimezone"
            onPress={() => ExpoScalefusion.canControlTimezone()}
          />
          <ActionButton
            name="isTimezoneAutomatic"
            onPress={() => ExpoScalefusion.isTimezoneAutomatic()}
          />
          <ToggleButton
            name="Set Timezone to Automatic"
            onToggle={(enabled) =>
              ExpoScalefusion.setTimezoneToAutomatic(enabled)
            }
          />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

import React, { useState } from "react";

function ActionButton(props: { name: string; onPress: () => any }) {
  const [result, setResult] = useState<any>(null);

  const handlePress = () => {
    const res = props.onPress();
    // Handle promise or sync result
    if (res instanceof Promise) {
      res.then(setResult).catch(setResult);
    } else {
      setResult(res);
    }
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title={props.name} onPress={handlePress} />
      {result !== null && (
        <Text style={{ marginTop: 8 }}>
          {typeof result === "string" || typeof result === "number"
            ? String(result)
            : JSON.stringify(result)}
        </Text>
      )}
    </View>
  );
}

function ToggleButton(props: {
  name: string;
  onToggle: (enabled: boolean) => any;
}) {
  const [result, setResult] = useState<any>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (enable: boolean) => {
    setIsEnabled(enable);
    try {
      const res = props.onToggle(enable);
      // Handle promise or sync result
      if (res instanceof Promise) {
        res.then(setResult).catch(setResult);
      } else {
        setResult(res);
      }
    } catch (error) {
      setResult(error);
    }
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, marginRight: 10 }}>{props.name}</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button
            title="Enable"
            onPress={() => handleToggle(true)}
            color={isEnabled ? "#007AFF" : "#8E8E93"}
          />
          <Button
            title="Disable"
            onPress={() => handleToggle(false)}
            color={!isEnabled ? "#FF3B30" : "#8E8E93"}
          />
        </View>
      </View>
      {result !== null && (
        <Text style={{ marginTop: 8 }}>
          {typeof result === "string" || typeof result === "number"
            ? String(result)
            : JSON.stringify(result)}
        </Text>
      )}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
};
