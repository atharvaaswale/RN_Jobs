import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { userRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { isLoading } from "expo-font";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "react native developer",
    num_pages: 1,
  });
  console.log(data);

  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = () => {
    router.push(`job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
