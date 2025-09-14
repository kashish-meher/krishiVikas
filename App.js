import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

import profileIcon from "./assets/krishiLOGO.jpg"; // <-- Replace with your actual icon file

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    pincode: "",
    farmSize: "",
    crop: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    Alert.alert("Success", "Registration Successful! (Dummy)");
    console.log("Form Data:", formData);
  };

  const handleIconPress = () => {
    Alert.alert("Icon Pressed", "This is just a placeholder action.");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F2E8CF" }}>
      {/* HEADER BAR */}
      <View style={styles.header}>
        <View style={{ flex: 1 }} /> {/* Pushes icon to right */}
        <TouchableOpacity onPress={handleIconPress} style={styles.iconButton}>
          <Image source={profileIcon} style={styles.iconImage} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* REGISTRATION FORM */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Join Krishi Vikas</Text>
        <Text style={styles.subtitle}>Create your account to start smart farming</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => handleChange("fullName", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={(text) => handleChange("phone", text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={formData.state}
          onChangeText={(text) => handleChange("state", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          value={formData.pincode}
          onChangeText={(text) => handleChange("pincode", text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Farm Size (Acres)"
          value={formData.farmSize}
          onChangeText={(text) => handleChange("farmSize", text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Crop They Grow"
          value={formData.crop}
          onChangeText={(text) => handleChange("crop", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChangeText={(text) => handleChange("confirmPassword", text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingVertical: 1, // Increased for more height
    paddingHorizontal: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#A7C957",
  },
  iconButton: {
    padding: 5,
  },
  iconImage: {
    width: 150, // BIGGER ICON
    height: 60,
    borderRadius: 30, // makes it circular
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#386641",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#6A994E",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#A7C957",
  },
  button: {
    width: "100%",
    backgroundColor: "#386641",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});