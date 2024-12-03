import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "CONNECT TO YOUR FACEBOOK ACCOUNT",
    icon: "🔗", // Icon tạm thời, có thể thay bằng ảnh
  },
  {
    id: "2",
    title: "SELECT GROUPS FOR SELLING",
    icon: "👥",
  },
  {
    id: "3",
    title: "A LOT OF POWER TOOLS WILL SUPPORT YOU",
    icon: "🛠️",
  },
  {
    id: "4",
    title: "You have passed the onboarding",
    icon: "☑️",
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Onboarding completed!");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Nội dung của slide */}
      <View style={[styles.slide, { width }]}>
        <Text style={styles.icon}>{slides[currentIndex].icon}</Text>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
      </View>

      {/* Nút điều hướng */}
      <View style={currentIndex == slides.length - 1 ? styles.hiddenfooter: styles.footer}>
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex < slides.length - 2 ? "Next" : "Done"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: "100%",
  },
  hiddenfooter: {
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
