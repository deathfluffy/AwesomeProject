import { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewestSongs } from "../store/slices/tracksSlice";
import { AppDispatch, RootState } from "../store/store";



export const TracksList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.tracks);

  useEffect(() => {
    dispatch(fetchNewestSongs());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading tracks...</Text>
      </View>
    );
  }

  if (status === "failed") {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!data?.length) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>No tracks found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.trackItem}>
          <Text style={styles.trackTitle}>{item.title}</Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    color: "#ff3b30",
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  listContainer: {
    padding: 16,
  },
  trackItem: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
