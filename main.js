// Function to check if a year is a leap year
function isLeapYear(year) {
  return new Date(year, 1, 29).getDate() === 29;
}

// Function to calculate the day of the year
function getDayOfYear(date) {
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear(date.getFullYear())) {
    monthLength[1] = 29;
  }

  let dayOfYear = 0;
  for (let i = 0; i < date.getMonth(); i++) {
    dayOfYear += monthLength[i];
  }
  dayOfYear += date.getDate();

  return dayOfYear;
}

// Function to get the corresponding prayer time
function getPrayerTime(dayOfYear) {
  const prayerTimes = {
    WSalahFajr: ["7:10 AM", "7:10 AM", "7:09 AM", "7:09 AM", "7:09 AM", "7:09 AM", "7:08 AM", "7:08 AM", "7:07 AM", "7:07 AM", "7:06 AM", "7:05 AM", "7:05 AM", "7:04 AM", "7:03 AM", "7:02 AM", "7:01 AM", "7:00 AM", "7:00 AM", "6:58 AM", "6:57 AM", "6:56 AM", "6:55 AM", "6:54 AM", "6:53 AM", "6:51 AM", "6:50 AM", "6:49 AM", "6:47 AM", "6:46 AM", "6:44 AM", "6:43 AM", "6:41 AM", "6:40 AM", "6:38 AM", "6:37 AM", "6:35 AM", "6:33 AM", "6:32 AM", "6:30 AM", "6:28 AM", "6:26 AM", "6:25 AM", "6:23 AM", "6:21 AM", "6:19 AM", "6:17 AM", "6:15 AM", "6:13 AM", "6:11 AM", "6:09 AM", "6:07 AM", "6:05 AM", "6:03 AM", "6:01 AM", "5:59 AM", "5:57 AM", "5:55 AM", "5:53 AM", "5:51 AM", "5:49 AM", "5:46 AM", "5:44 AM", "5:42 AM", "5:40 AM", "5:38 AM", "5:36 AM", "5:33 AM", "5:31 AM", "6:29 AM", "6:27 AM", "6:25 AM", "6:22 AM", "6:20 AM", "6:18 AM", "6:16 AM", "6:13 AM", "6:11 AM", "6:09 AM", "6:07 AM", "6:04 AM", "6:02 AM", "6:00 AM", "5:58 AM", "5:55 AM", "5:53 AM", "5:51 AM", "5:49 AM", "5:46 AM", "5:44 AM", "5:42 AM", "5:40 AM", "5:37 AM", "5:35 AM", "5:33 AM", "5:31 AM", "5:29 AM", "5:26 AM", "5:24 AM", "5:22 AM", "5:20 AM", "5:18 AM", "5:16 AM", "5:13 AM", "5:11 AM", "5:09 AM", "5:07 AM", "5:05 AM", "5:03 AM", "5:01 AM", "4:59 AM", "4:57 AM", "4:55 AM", "4:53 AM", "4:51 AM", "4:49 AM", "4:47 AM", "4:45 AM", "4:43 AM", "4:41 AM", "4:39 AM", "4:38 AM", "4:36 AM", "4:34 AM", "4:32 AM", "4:30 AM", "4:29 AM", "4:27 AM", "4:25 AM", "4:24 AM", "4:22 AM", "4:21 AM", "4:19 AM", "4:18 AM", "4:16 AM", "4:15 AM", "4:13 AM", "4:12 AM", "4:11 AM", "4:09 AM", "4:08 AM", "4:07 AM", "4:06 AM", "4:05 AM", "4:03 AM", "4:02 AM", "4:01 AM", "4:00 AM", "3:59 AM", "3:59 AM", "3:58 AM", "3:57 AM", "3:56 AM", "3:56 AM", "3:55 AM", "3:54 AM", "3:54 AM", "3:53 AM", "3:53 AM", "3:52 AM", "3:52 AM", "3:52 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:51 AM", "3:52 AM", "3:52 AM", "3:52 AM", "3:53 AM", "3:53 AM", "3:53 AM", "3:54 AM", "3:55 AM", "3:55 AM", "3:56 AM", "3:56 AM", "3:57 AM", "3:58 AM", "3:59 AM", "4:00 AM", "4:01 AM", "4:01 AM", "4:02 AM", "4:03 AM", "4:04 AM", "4:06 AM", "4:07 AM", "4:08 AM", "4:09 AM", "4:10 AM", "4:11 AM", "4:12 AM", "4:14 AM", "4:15 AM", "4:16 AM", "4:18 AM", "4:19 AM", "4:20 AM", "4:22 AM", "4:23 AM", "4:24 AM", "4:26 AM", "4:27 AM", "4:29 AM", "4:30 AM", "4:32 AM", "4:33 AM", "4:35 AM", "4:36 AM", "4:38 AM", "4:39 AM", "4:41 AM", "4:42 AM", "4:44 AM", "4:45 AM", "4:47 AM", "4:48 AM", "4:50 AM", "4:51 AM", "4:53 AM", "4:55 AM", "4:56 AM", "4:58 AM", "4:59 AM", "5:01 AM", "5:02 AM", "5:04 AM", "5:06 AM", "5:07 AM", "5:09 AM", "5:10 AM", "5:12 AM", "5:13 AM", "5:15 AM", "5:16 AM", "5:18 AM", "5:20 AM", "5:21 AM", "5:23 AM", "5:24 AM", "5:26 AM", "5:27 AM", "5:29 AM", "5:31 AM", "5:32 AM", "5:34 AM", "5:35 AM", "5:37 AM", "5:38 AM", "5:40 AM", "5:41 AM", "5:43 AM", "5:45 AM", "5:46 AM", "5:48 AM", "5:49 AM", "5:51 AM", "5:52 AM", "5:54 AM", "5:56 AM", "5:57 AM", "5:59 AM", "6:00 AM", "6:02 AM", "6:04 AM", "6:05 AM", "6:07 AM", "6:08 AM", "6:10 AM", "6:12 AM", "6:13 AM", "6:15 AM", "6:16 AM", "6:18 AM", "6:20 AM", "6:21 AM", "6:23 AM", "6:25 AM", "6:26 AM", "6:28 AM", "6:30 AM", "6:31 AM", "6:33 AM", "6:35 AM", "6:36 AM", "6:38 AM", "6:40 AM", "6:41 AM", "6:43 AM", "6:45 AM", "6:47 AM", "6:48 AM", "6:50 AM", "6:52 AM", "6:54 AM", "6:55 AM", "6:57 AM", "6:59 AM", "7:00 AM", "7:02 AM", "6:04 AM", "6:06 AM", "6:07 AM", "6:09 AM", "6:11 AM", "6:13 AM", "6:14 AM", "6:16 AM", "6:18 AM", "6:19 AM", "6:21 AM", "6:23 AM", "6:24 AM", "6:26 AM", "6:28 AM", "6:29 AM", "6:31 AM", "6:33 AM", "6:34 AM", "6:36 AM", "6:37 AM", "6:39 AM", "6:40 AM", "6:42 AM", "6:43 AM", "6:45 AM", "6:46 AM", "6:48 AM", "6:49 AM", "6:50 AM", "6:52 AM", "6:53 AM", "6:54 AM", "6:55 AM", "6:56 AM", "6:58 AM", "6:59 AM", "7:00 AM", "7:01 AM", "7:02 AM", "7:02 AM", "7:03 AM", "7:04 AM", "7:05 AM", "7:06 AM", "7:06 AM", "7:07 AM", "7:07 AM", "7:08 AM", "7:08 AM", "7:09 AM", "7:09 AM", "7:09 AM", "7:09 AM", "7:10 AM", "7:10 AM", "7:10 AM", "7:10 AM", "7:10 AM", "7:10 AM", "7:10 AM", "7:09 AM", "7:09 AM", "7:09 AM", "7:09 AM", "7:08 AM", "7:08 AM", "7:07 AM", "7:07 AM"],
    WSalahSunrise: ["8:40 AM", "8:40 AM", "8:39 AM", "8:39 AM", "8:39 AM", "8:39 AM", "8:38 AM", "8:38 AM", "8:37 AM", "8:37 AM", "8:36 AM", "8:35 AM", "8:35 AM", "8:34 AM", "8:33 AM", "8:32 AM", "8:31 AM", "8:30 AM", "8:30 AM", "8:28 AM", "8:27 AM", "8:26 AM", "8:25 AM", "8:24 AM", "8:23 AM", "8:21 AM", "8:20 AM", "8:19 AM", "8:17 AM", "8:16 AM", "8:14 AM", "8:13 AM", "8:11 AM", "8:10 AM", "8:08 AM", "8:07 AM", "8:05 AM", "8:03 AM", "8:02 AM", "8:00 AM", "7:58 AM", "7:56 AM", "7:55 AM", "7:53 AM", "7:51 AM", "7:49 AM", "7:47 AM", "7:45 AM", "7:43 AM", "7:41 AM", "7:39 AM", "7:37 AM", "7:35 AM", "7:33 AM", "7:31 AM", "7:29 AM", "7:27 AM", "7:25 AM", "7:23 AM", "7:21 AM", "7:19 AM", "7:16 AM", "7:14 AM", "7:12 AM", "7:10 AM", "7:08 AM", "7:06 AM", "7:03 AM", "7:01 AM", "7:59 AM", "7:57 AM", "7:55 AM", "7:52 AM", "7:50 AM", "7:48 AM", "7:46 AM", "7:43 AM", "7:41 AM", "7:39 AM", "7:37 AM", "7:34 AM", "7:32 AM", "7:30 AM", "7:28 AM", "7:25 AM", "7:23 AM", "7:21 AM", "7:19 AM", "7:16 AM", "7:14 AM", "7:12 AM", "7:10 AM", "7:07 AM", "7:05 AM", "7:03 AM", "7:01 AM", "6:59 AM", "6:56 AM", "6:54 AM", "6:52 AM", "6:50 AM", "6:48 AM", "6:46 AM", "6:43 AM", "6:41 AM", "6:39 AM", "6:37 AM", "6:35 AM", "6:33 AM", "6:31 AM", "6:29 AM", "6:27 AM", "6:25 AM", "6:23 AM", "6:21 AM", "6:19 AM", "6:17 AM", "6:15 AM", "6:13 AM", "6:11 AM", "6:09 AM", "6:08 AM", "6:06 AM", "6:04 AM", "6:02 AM", "6:00 AM", "5:59 AM", "5:57 AM", "5:55 AM", "5:54 AM", "5:52 AM", "5:51 AM", "5:49 AM", "5:48 AM", "5:46 AM", "5:45 AM", "5:43 AM", "5:42 AM", "5:41 AM", "5:39 AM", "5:38 AM", "5:37 AM", "5:36 AM", "5:35 AM", "5:33 AM", "5:32 AM", "5:31 AM", "5:30 AM", "5:29 AM", "5:29 AM", "5:28 AM", "5:27 AM", "5:26 AM", "5:26 AM", "5:25 AM", "5:24 AM", "5:24 AM", "5:23 AM", "5:23 AM", "5:22 AM", "5:22 AM", "5:22 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:21 AM", "5:22 AM", "5:22 AM", "5:22 AM", "5:23 AM", "5:23 AM", "5:23 AM", "5:24 AM", "5:25 AM", "5:25 AM", "5:26 AM", "5:26 AM", "5:27 AM", "5:28 AM", "5:29 AM", "5:30 AM", "5:31 AM", "5:31 AM", "5:32 AM", "5:33 AM", "5:34 AM", "5:36 AM", "5:37 AM", "5:38 AM", "5:39 AM", "5:40 AM", "5:41 AM", "5:42 AM", "5:44 AM", "5:45 AM", "5:46 AM", "5:48 AM", "5:49 AM", "5:50 AM", "5:52 AM", "5:53 AM", "5:54 AM", "5:56 AM", "5:57 AM", "5:59 AM", "6:00 AM", "6:02 AM", "6:03 AM", "6:05 AM", "6:06 AM", "6:08 AM", "6:09 AM", "6:11 AM", "6:12 AM", "6:14 AM", "6:15 AM", "6:17 AM", "6:18 AM", "6:20 AM", "6:21 AM", "6:23 AM", "6:25 AM", "6:26 AM", "6:28 AM", "6:29 AM", "6:31 AM", "6:32 AM", "6:34 AM", "6:36 AM", "6:37 AM", "6:39 AM", "6:40 AM", "6:42 AM", "6:43 AM", "6:45 AM", "6:46 AM", "6:48 AM", "6:50 AM", "6:51 AM", "6:53 AM", "6:54 AM", "6:56 AM", "6:57 AM", "6:59 AM", "7:01 AM", "7:02 AM", "7:04 AM", "7:05 AM", "7:07 AM", "7:08 AM", "7:10 AM", "7:11 AM", "7:13 AM", "7:15 AM", "7:16 AM", "7:18 AM", "7:19 AM", "7:21 AM", "7:22 AM", "7:24 AM", "7:26 AM", "7:27 AM", "7:29 AM", "7:30 AM", "7:32 AM", "7:34 AM", "7:35 AM", "7:37 AM", "7:38 AM", "7:40 AM", "7:42 AM", "7:43 AM", "7:45 AM", "7:46 AM", "7:48 AM", "7:50 AM", "7:51 AM", "7:53 AM", "7:55 AM", "7:56 AM", "7:58 AM", "8:00 AM", "8:01 AM", "8:03 AM", "8:05 AM", "8:06 AM", "8:08 AM", "8:10 AM", "8:11 AM", "8:13 AM", "8:15 AM", "8:17 AM", "8:18 AM", "8:20 AM", "8:22 AM", "8:24 AM", "8:25 AM", "8:27 AM", "8:29 AM", "8:30 AM", "8:32 AM", "7:34 AM", "7:36 AM", "7:37 AM", "7:39 AM", "7:41 AM", "7:43 AM", "7:44 AM", "7:46 AM", "7:48 AM", "7:49 AM", "7:51 AM", "7:53 AM", "7:54 AM", "7:56 AM", "7:58 AM", "7:59 AM", "8:01 AM", "8:03 AM", "8:04 AM", "8:06 AM", "8:07 AM", "8:09 AM", "8:10 AM", "8:12 AM", "8:13 AM", "8:15 AM", "8:16 AM", "8:18 AM", "8:19 AM", "8:20 AM", "8:22 AM", "8:23 AM", "8:24 AM", "8:25 AM", "8:26 AM", "8:28 AM", "8:29 AM", "8:30 AM", "8:31 AM", "8:32 AM", "8:32 AM", "8:33 AM", "8:34 AM", "8:35 AM", "8:36 AM", "8:36 AM", "8:37 AM", "8:37 AM", "8:38 AM", "8:38 AM", "8:39 AM", "8:39 AM", "8:39 AM", "8:39 AM", "8:40 AM", "8:40 AM", "8:40 AM", "8:40 AM", "8:40 AM", "8:40 AM", "8:40 AM", "8:39 AM", "8:39 AM", "8:39 AM", "8:39 AM", "8:38 AM", "8:38 AM", "8:37 AM", "8:37 AM"],
    WSalahZuhr: ["12:40 PM", "12:40 PM", "12:41 PM", "12:41 PM", "12:42 PM", "12:42 PM", "12:43 PM", "12:43 PM", "12:43 PM", "12:44 PM", "12:44 PM", "12:45 PM", "12:45 PM", "12:45 PM", "12:46 PM", "12:46 PM", "12:46 PM", "12:47 PM", "12:47 PM", "12:47 PM", "12:48 PM", "12:48 PM", "12:48 PM", "12:48 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:50 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:49 PM", "12:48 PM", "12:48 PM", "12:48 PM", "12:48 PM", "12:47 PM", "12:47 PM", "12:47 PM", "12:47 PM", "12:46 PM", "1:46 PM", "1:46 PM", "1:46 PM", "1:45 PM", "1:45 PM", "1:45 PM", "1:45 PM", "1:44 PM", "1:44 PM", "1:44 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:38 PM", "1:38 PM", "1:38 PM", "1:37 PM", "1:37 PM", "1:37 PM", "1:37 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:34 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:37 PM", "1:37 PM", "1:37 PM", "1:37 PM", "1:38 PM", "1:38 PM", "1:38 PM", "1:38 PM", "1:38 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:43 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:42 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:41 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:40 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:39 PM", "1:38 PM", "1:38 PM", "1:38 PM", "1:37 PM", "1:37 PM", "1:37 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:36 PM", "1:35 PM", "1:35 PM", "1:35 PM", "1:34 PM", "1:34 PM", "1:33 PM", "1:33 PM", "1:33 PM", "1:32 PM", "1:32 PM", "1:32 PM", "1:31 PM", "1:31 PM", "1:31 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:29 PM", "1:29 PM", "1:29 PM", "1:28 PM", "1:28 PM", "1:27 PM", "1:27 PM", "1:27 PM", "1:26 PM", "1:26 PM", "1:26 PM", "1:26 PM", "1:25 PM", "1:25 PM", "1:25 PM", "1:24 PM", "1:24 PM", "1:24 PM", "1:23 PM", "1:23 PM", "1:23 PM", "1:23 PM", "1:22 PM", "1:22 PM", "1:22 PM", "1:22 PM", "1:22 PM", "1:21 PM", "1:21 PM", "1:21 PM", "1:21 PM", "1:21 PM", "1:21 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "1:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:20 PM", "12:21 PM", "12:21 PM", "12:21 PM", "12:21 PM", "12:21 PM", "12:21 PM", "12:22 PM", "12:22 PM", "12:22 PM", "12:22 PM", "12:23 PM", "12:23 PM", "12:23 PM", "12:24 PM", "12:24 PM", "12:24 PM", "12:25 PM", "12:25 PM", "12:25 PM", "12:26 PM", "12:26 PM", "12:27 PM", "12:27 PM", "12:27 PM", "12:28 PM", "12:28 PM", "12:29 PM", "12:29 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:31 PM", "12:31 PM", "12:32 PM", "12:32 PM", "12:33 PM", "12:33 PM", "12:34 PM", "12:34 PM", "12:35 PM", "12:35 PM", "12:36 PM", "12:36 PM", "12:37 PM", "12:37 PM", "12:38 PM", "12:38 PM", "12:39 PM", "12:39 PM", "12:40 PM", "12:40 PM", "12:40 PM", "12:41 PM", "12:41 PM", "12:42 PM", "12:42 PM", "12:43 PM", "12:43 PM", "12:43 PM", "12:44 PM"],
    WSalahAsr: ["2:24 PM", "2:25 PM", "2:26 PM", "2:27 PM", "2:28 PM", "2:29 PM", "2:30 PM", "2:31 PM", "2:32 PM", "2:33 PM", "2:34 PM", "2:36 PM", "2:37 PM", "2:38 PM", "2:39 PM", "2:41 PM", "2:42 PM", "2:43 PM", "2:45 PM", "2:46 PM", "2:47 PM", "2:49 PM", "2:50 PM", "2:51 PM", "2:53 PM", "2:54 PM", "2:56 PM", "2:57 PM", "2:59 PM", "3:00 PM", "3:01 PM", "3:03 PM", "3:04 PM", "3:06 PM", "3:07 PM", "3:09 PM", "3:10 PM", "3:11 PM", "3:13 PM", "3:14 PM", "3:16 PM", "3:17 PM", "3:19 PM", "3:20 PM", "3:21 PM", "3:23 PM", "3:24 PM", "3:25 PM", "3:27 PM", "3:28 PM", "3:29 PM", "3:31 PM", "3:32 PM", "3:33 PM", "3:35 PM", "3:36 PM", "3:37 PM", "3:38 PM", "3:40 PM", "3:41 PM", "3:42 PM", "3:43 PM", "3:45 PM", "3:46 PM", "3:47 PM", "3:48 PM", "3:49 PM", "3:50 PM", "3:52 PM", "4:53 PM", "4:54 PM", "4:55 PM", "4:56 PM", "4:57 PM", "4:58 PM", "4:59 PM", "5:00 PM", "5:01 PM", "5:02 PM", "5:03 PM", "5:04 PM", "5:05 PM", "5:06 PM", "5:07 PM", "5:08 PM", "5:09 PM", "5:10 PM", "5:11 PM", "5:12 PM", "5:12 PM", "5:13 PM", "5:14 PM", "5:15 PM", "5:16 PM", "5:17 PM", "5:18 PM", "5:18 PM", "5:19 PM", "5:20 PM", "5:21 PM", "5:22 PM", "5:22 PM", "5:23 PM", "5:24 PM", "5:25 PM", "5:25 PM", "5:26 PM", "5:27 PM", "5:28 PM", "5:28 PM", "5:29 PM", "5:30 PM", "5:30 PM", "5:31 PM", "5:32 PM", "5:32 PM", "5:33 PM", "5:34 PM", "5:34 PM", "5:35 PM", "5:36 PM", "5:36 PM", "5:37 PM", "5:38 PM", "5:38 PM", "5:39 PM", "5:40 PM", "5:40 PM", "5:41 PM", "5:41 PM", "5:42 PM", "5:43 PM", "5:43 PM", "5:44 PM", "5:44 PM", "5:45 PM", "5:45 PM", "5:46 PM", "5:47 PM", "5:47 PM", "5:48 PM", "5:48 PM", "5:49 PM", "5:49 PM", "5:50 PM", "5:50 PM", "5:51 PM", "5:51 PM", "5:52 PM", "5:52 PM", "5:53 PM", "5:53 PM", "5:54 PM", "5:54 PM", "5:54 PM", "5:55 PM", "5:55 PM", "5:56 PM", "5:56 PM", "5:56 PM", "5:57 PM", "5:57 PM", "5:57 PM", "5:58 PM", "5:58 PM", "5:58 PM", "5:59 PM", "5:59 PM", "5:59 PM", "5:59 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:01 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:00 PM", "5:59 PM", "5:59 PM", "5:59 PM", "5:59 PM", "5:58 PM", "5:58 PM", "5:57 PM", "5:57 PM", "5:56 PM", "5:56 PM", "5:56 PM", "5:55 PM", "5:54 PM", "5:54 PM", "5:53 PM", "5:53 PM", "5:52 PM", "5:51 PM", "5:51 PM", "5:50 PM", "5:49 PM", "5:48 PM", "5:48 PM", "5:47 PM", "5:46 PM", "5:45 PM", "5:44 PM", "5:43 PM", "5:42 PM", "5:41 PM", "5:40 PM", "5:39 PM", "5:38 PM", "5:37 PM", "5:36 PM", "5:35 PM", "5:34 PM", "5:33 PM", "5:32 PM", "5:30 PM", "5:29 PM", "5:28 PM", "5:27 PM", "5:25 PM", "5:24 PM", "5:23 PM", "5:22 PM", "5:20 PM", "5:19 PM", "5:17 PM", "5:16 PM", "5:15 PM", "5:13 PM", "5:12 PM", "5:10 PM", "5:09 PM", "5:07 PM", "5:06 PM", "5:04 PM", "5:03 PM", "5:01 PM", "5:00 PM", "4:58 PM", "4:57 PM", "4:55 PM", "4:53 PM", "4:52 PM", "4:50 PM", "4:49 PM", "4:47 PM", "4:45 PM", "4:44 PM", "4:42 PM", "4:40 PM", "4:39 PM", "4:37 PM", "4:35 PM", "4:34 PM", "4:32 PM", "4:30 PM", "4:29 PM", "4:27 PM", "4:25 PM", "4:24 PM", "4:22 PM", "4:20 PM", "4:19 PM", "4:17 PM", "4:15 PM", "4:14 PM", "4:12 PM", "4:11 PM", "4:09 PM", "4:07 PM", "4:06 PM", "4:04 PM", "4:02 PM", "4:01 PM", "3:59 PM", "3:58 PM", "3:56 PM", "3:55 PM", "3:53 PM", "3:52 PM", "3:50 PM", "3:49 PM", "3:47 PM", "3:46 PM", "3:44 PM", "3:43 PM", "3:41 PM", "3:40 PM", "2:39 PM", "2:37 PM", "2:36 PM", "2:35 PM", "2:34 PM", "2:32 PM", "2:31 PM", "2:30 PM", "2:29 PM", "2:28 PM", "2:27 PM", "2:26 PM", "2:25 PM", "2:24 PM", "2:23 PM", "2:22 PM", "2:21 PM", "2:20 PM", "2:20 PM", "2:19 PM", "2:18 PM", "2:17 PM", "2:17 PM", "2:16 PM", "2:16 PM", "2:15 PM", "2:15 PM", "2:14 PM", "2:14 PM", "2:14 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:13 PM", "2:14 PM", "2:14 PM", "2:14 PM", "2:15 PM", "2:15 PM", "2:15 PM", "2:16 PM", "2:17 PM", "2:17 PM", "2:18 PM", "2:18 PM", "2:19 PM", "2:20 PM", "2:21 PM", "2:22 PM", "2:23 PM", "2:24 PM", "2:24 PM", "2:25 PM", "2:26 PM", "2:27 PM", "2:28 PM", "2:29 PM", "2:30 PM", "2:31 PM", "2:32 PM", "2:33 PM"],
    WSalahMaghrib: ["4:40 PM", "4:41 PM", "4:42 PM", "4:44 PM", "4:45 PM", "4:46 PM", "4:47 PM", "4:49 PM", "4:50 PM", "4:51 PM", "4:53 PM", "4:54 PM", "4:56 PM", "4:57 PM", "4:59 PM", "5:00 PM", "5:02 PM", "5:03 PM", "5:05 PM", "5:07 PM", "5:08 PM", "5:10 PM", "5:12 PM", "5:13 PM", "5:15 PM", "5:17 PM", "5:19 PM", "5:20 PM", "5:22 PM", "5:24 PM", "5:26 PM", "5:27 PM", "5:29 PM", "5:31 PM", "5:33 PM", "5:35 PM", "5:36 PM", "5:38 PM", "5:40 PM", "5:42 PM", "5:44 PM", "5:45 PM", "5:47 PM", "5:49 PM", "5:51 PM", "5:53 PM", "5:54 PM", "5:56 PM", "5:58 PM", "6:00 PM", "6:01 PM", "6:03 PM", "6:05 PM", "6:07 PM", "6:09 PM", "6:10 PM", "6:12 PM", "6:14 PM", "6:16 PM", "6:17 PM", "6:19 PM", "6:21 PM", "6:22 PM", "6:24 PM", "6:26 PM", "6:28 PM", "6:29 PM", "6:31 PM", "6:33 PM", "7:34 PM", "7:36 PM", "7:38 PM", "7:39 PM", "7:41 PM", "7:43 PM", "7:44 PM", "7:46 PM", "7:48 PM", "7:49 PM", "7:51 PM", "7:53 PM", "7:54 PM", "7:56 PM", "7:58 PM", "7:59 PM", "8:01 PM", "8:03 PM", "8:04 PM", "8:06 PM", "8:08 PM", "8:09 PM", "8:11 PM", "8:12 PM", "8:14 PM", "8:16 PM", "8:17 PM", "8:19 PM", "8:21 PM", "8:22 PM", "8:24 PM", "8:26 PM", "8:27 PM", "8:29 PM", "8:31 PM", "8:32 PM", "8:34 PM", "8:35 PM", "8:37 PM", "8:39 PM", "8:40 PM", "8:42 PM", "8:44 PM", "8:45 PM", "8:47 PM", "8:49 PM", "8:50 PM", "8:52 PM", "8:53 PM", "8:55 PM", "8:57 PM", "8:58 PM", "9:00 PM", "9:01 PM", "9:03 PM", "9:05 PM", "9:06 PM", "9:08 PM", "9:09 PM", "9:11 PM", "9:12 PM", "9:14 PM", "9:15 PM", "9:17 PM", "9:18 PM", "9:20 PM", "9:21 PM", "9:23 PM", "9:24 PM", "9:26 PM", "9:27 PM", "9:28 PM", "9:30 PM", "9:31 PM", "9:32 PM", "9:34 PM", "9:35 PM", "9:36 PM", "9:37 PM", "9:38 PM", "9:40 PM", "9:41 PM", "9:42 PM", "9:43 PM", "9:44 PM", "9:45 PM", "9:46 PM", "9:47 PM", "9:47 PM", "9:48 PM", "9:49 PM", "9:50 PM", "9:50 PM", "9:51 PM", "9:52 PM", "9:52 PM", "9:53 PM", "9:53 PM", "9:54 PM", "9:54 PM", "9:54 PM", "9:54 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:55 PM", "9:54 PM", "9:54 PM", "9:54 PM", "9:53 PM", "9:53 PM", "9:52 PM", "9:52 PM", "9:51 PM", "9:51 PM", "9:50 PM", "9:49 PM", "9:48 PM", "9:48 PM", "9:47 PM", "9:46 PM", "9:45 PM", "9:44 PM", "9:43 PM", "9:42 PM", "9:40 PM", "9:39 PM", "9:38 PM", "9:37 PM", "9:36 PM", "9:34 PM", "9:33 PM", "9:31 PM", "9:30 PM", "9:29 PM", "9:27 PM", "9:26 PM", "9:24 PM", "9:22 PM", "9:21 PM", "9:19 PM", "9:17 PM", "9:16 PM", "9:14 PM", "9:12 PM", "9:10 PM", "9:09 PM", "9:07 PM", "9:05 PM", "9:03 PM", "9:01 PM", "8:59 PM", "8:57 PM", "8:55 PM", "8:53 PM", "8:51 PM", "8:49 PM", "8:47 PM", "8:45 PM", "8:43 PM", "8:41 PM", "8:39 PM", "8:37 PM", "8:35 PM", "8:33 PM", "8:30 PM", "8:28 PM", "8:26 PM", "8:24 PM", "8:22 PM", "8:19 PM", "8:17 PM", "8:15 PM", "8:13 PM", "8:11 PM", "8:08 PM", "8:06 PM", "8:04 PM", "8:02 PM", "7:59 PM", "7:57 PM", "7:55 PM", "7:53 PM", "7:50 PM", "7:48 PM", "7:46 PM", "7:43 PM", "7:41 PM", "7:39 PM", "7:37 PM", "7:34 PM", "7:32 PM", "7:30 PM", "7:28 PM", "7:25 PM", "7:23 PM", "7:21 PM", "7:18 PM", "7:16 PM", "7:14 PM", "7:12 PM", "7:10 PM", "7:07 PM", "7:05 PM", "7:03 PM", "7:01 PM", "6:58 PM", "6:56 PM", "6:54 PM", "6:52 PM", "6:50 PM", "6:48 PM", "6:46 PM", "6:43 PM", "6:41 PM", "6:39 PM", "6:37 PM", "6:35 PM", "6:33 PM", "6:31 PM", "6:29 PM", "6:27 PM", "6:25 PM", "6:23 PM", "6:21 PM", "6:19 PM", "6:18 PM", "6:16 PM", "6:14 PM", "6:12 PM", "6:10 PM", "6:08 PM", "6:07 PM", "5:05 PM", "5:03 PM", "5:02 PM", "5:00 PM", "4:59 PM", "4:57 PM", "4:55 PM", "4:54 PM", "4:53 PM", "4:51 PM", "4:50 PM", "4:48 PM", "4:47 PM", "4:46 PM", "4:45 PM", "4:43 PM", "4:42 PM", "4:41 PM", "4:40 PM", "4:39 PM", "4:38 PM", "4:37 PM", "4:36 PM", "4:35 PM", "4:35 PM", "4:34 PM", "4:33 PM", "4:33 PM", "4:32 PM", "4:32 PM", "4:31 PM", "4:31 PM", "4:30 PM", "4:30 PM", "4:30 PM", "4:30 PM", "4:29 PM", "4:29 PM", "4:29 PM", "4:29 PM", "4:29 PM", "4:30 PM", "4:30 PM", "4:30 PM", "4:30 PM", "4:31 PM", "4:31 PM", "4:32 PM", "4:32 PM", "4:33 PM", "4:33 PM", "4:34 PM", "4:35 PM", "4:35 PM", "4:36 PM", "4:37 PM", "4:38 PM", "4:39 PM", "4:40 PM", "4:40 PM", "4:41 PM", "4:42 PM", "4:44 PM", "4:45 PM", "4:46 PM", "4:47 PM", "4:49 PM", "4:50 PM", "4:51 PM"],
    WSalahIsha: ["6:10 PM", "6:11 PM", "6:12 PM", "6:14 PM", "6:15 PM", "6:16 PM", "6:17 PM", "6:19 PM", "6:20 PM", "6:21 PM", "6:23 PM", "6:24 PM", "6:26 PM", "6:27 PM", "6:29 PM", "6:30 PM", "6:32 PM", "6:33 PM", "6:35 PM", "6:37 PM", "6:38 PM", "6:40 PM", "6:42 PM", "6:43 PM", "6:45 PM", "6:47 PM", "6:49 PM", "6:50 PM", "6:52 PM", "6:54 PM", "6:56 PM", "6:57 PM", "6:59 PM", "7:01 PM", "7:03 PM", "7:05 PM", "7:06 PM", "7:08 PM", "7:10 PM", "7:12 PM", "7:14 PM", "7:15 PM", "7:17 PM", "7:19 PM", "7:21 PM", "7:23 PM", "7:24 PM", "7:26 PM", "7:28 PM", "7:30 PM", "7:31 PM", "7:33 PM", "7:35 PM", "7:37 PM", "7:39 PM", "7:40 PM", "7:42 PM", "7:44 PM", "7:46 PM", "7:47 PM", "7:49 PM", "7:51 PM", "7:52 PM", "7:54 PM", "7:56 PM", "7:58 PM", "7:59 PM", "8:01 PM", "8:03 PM", "9:04 PM", "9:06 PM", "9:08 PM", "9:09 PM", "9:11 PM", "9:13 PM", "9:14 PM", "9:16 PM", "9:18 PM", "9:19 PM", "9:21 PM", "9:23 PM", "9:24 PM", "9:26 PM", "9:28 PM", "9:29 PM", "9:31 PM", "9:33 PM", "9:34 PM", "9:36 PM", "9:38 PM", "9:39 PM", "9:41 PM", "9:42 PM", "9:44 PM", "9:46 PM", "9:47 PM", "9:49 PM", "9:51 PM", "9:52 PM", "9:54 PM", "9:56 PM", "9:57 PM", "9:59 PM", "10:01 PM", "10:02 PM", "10:04 PM", "10:05 PM", "10:07 PM", "10:09 PM", "10:10 PM", "10:12 PM", "10:14 PM", "10:15 PM", "10:17 PM", "10:19 PM", "10:20 PM", "10:22 PM", "10:23 PM", "10:25 PM", "10:27 PM", "10:28 PM", "10:30 PM", "10:31 PM", "10:33 PM", "10:35 PM", "10:36 PM", "10:38 PM", "10:39 PM", "10:41 PM", "10:42 PM", "10:44 PM", "10:45 PM", "10:47 PM", "10:48 PM", "10:50 PM", "10:51 PM", "10:53 PM", "10:54 PM", "10:56 PM", "10:57 PM", "10:58 PM", "11:00 PM", "11:01 PM", "11:02 PM", "11:04 PM", "11:05 PM", "11:06 PM", "11:07 PM", "11:08 PM", "11:10 PM", "11:11 PM", "11:12 PM", "11:13 PM", "11:14 PM", "11:15 PM", "11:16 PM", "11:17 PM", "11:17 PM", "11:18 PM", "11:19 PM", "11:20 PM", "11:20 PM", "11:21 PM", "11:22 PM", "11:22 PM", "11:23 PM", "11:23 PM", "11:24 PM", "11:24 PM", "11:24 PM", "11:24 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:25 PM", "11:24 PM", "11:24 PM", "11:24 PM", "11:23 PM", "11:23 PM", "11:22 PM", "11:22 PM", "11:21 PM", "11:21 PM", "11:20 PM", "11:19 PM", "11:18 PM", "11:18 PM", "11:17 PM", "11:16 PM", "11:15 PM", "11:14 PM", "11:13 PM", "11:12 PM", "11:10 PM", "11:09 PM", "11:08 PM", "11:07 PM", "11:06 PM", "11:04 PM", "11:03 PM", "11:01 PM", "11:00 PM", "10:59 PM", "10:57 PM", "10:56 PM", "10:54 PM", "10:52 PM", "10:51 PM", "10:49 PM", "10:47 PM", "10:46 PM", "10:44 PM", "10:42 PM", "10:40 PM", "10:39 PM", "10:37 PM", "10:35 PM", "10:33 PM", "10:31 PM", "10:29 PM", "10:27 PM", "10:25 PM", "10:23 PM", "10:21 PM", "10:19 PM", "10:17 PM", "10:15 PM", "10:13 PM", "10:11 PM", "10:09 PM", "10:07 PM", "10:05 PM", "10:03 PM", "10:00 PM", "9:58 PM", "9:56 PM", "9:54 PM", "9:52 PM", "9:49 PM", "9:47 PM", "9:45 PM", "9:43 PM", "9:41 PM", "9:38 PM", "9:36 PM", "9:34 PM", "9:32 PM", "9:29 PM", "9:27 PM", "9:25 PM", "9:23 PM", "9:20 PM", "9:18 PM", "9:16 PM", "9:13 PM", "9:11 PM", "9:09 PM", "9:07 PM", "9:04 PM", "9:02 PM", "9:00 PM", "8:58 PM", "8:55 PM", "8:53 PM", "8:51 PM", "8:48 PM", "8:46 PM", "8:44 PM", "8:42 PM", "8:40 PM", "8:37 PM", "8:35 PM", "8:33 PM", "8:31 PM", "8:28 PM", "8:26 PM", "8:24 PM", "8:22 PM", "8:20 PM", "8:18 PM", "8:16 PM", "8:13 PM", "8:11 PM", "8:09 PM", "8:07 PM", "8:05 PM", "8:03 PM", "8:01 PM", "7:59 PM", "7:57 PM", "7:55 PM", "7:53 PM", "7:51 PM", "7:49 PM", "7:48 PM", "7:46 PM", "7:44 PM", "7:42 PM", "7:40 PM", "7:38 PM", "7:37 PM", "6:35 PM", "6:33 PM", "6:32 PM", "6:30 PM", "6:29 PM", "6:27 PM", "6:25 PM", "6:24 PM", "6:23 PM", "6:21 PM", "6:20 PM", "6:18 PM", "6:17 PM", "6:16 PM", "6:15 PM", "6:13 PM", "6:12 PM", "6:11 PM", "6:10 PM", "6:09 PM", "6:08 PM", "6:07 PM", "6:06 PM", "6:05 PM", "6:05 PM", "6:04 PM", "6:03 PM", "6:03 PM", "6:02 PM", "6:02 PM", "6:01 PM", "6:01 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:00 PM", "5:59 PM", "5:59 PM", "5:59 PM", "5:59 PM", "5:59 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:00 PM", "6:01 PM", "6:01 PM", "6:02 PM", "6:02 PM", "6:03 PM", "6:03 PM", "6:04 PM", "6:05 PM", "6:05 PM", "6:06 PM", "6:07 PM", "6:08 PM", "6:09 PM", "6:10 PM", "6:10 PM", "6:11 PM", "6:12 PM", "6:14 PM", "6:15 PM", "6:16 PM", "6:17 PM", "6:19 PM", "6:20 PM", "6:21 PM"]
  };

  const cday = (dayOfYear - 1) % 376; // Adjusted to fit the sample data range
  return {
    Fajr: prayerTimes.WSalahFajr[cday],
    Sunrise: prayerTimes.WSalahSunrise[cday],
    Zuhr: prayerTimes.WSalahZuhr[cday],
    Asr: prayerTimes.WSalahAsr[cday],
    Maghrib: prayerTimes.WSalahMaghrib[cday],
    Isha: prayerTimes.WSalahIsha[cday]
  };
}

// Function to add AM/PM indicator
function formatTimeWithIndicator(time) {
  const [hourMinute, period] = time.split(" ");
  return period === "AM" ? `${hourMinute} ص` : `${hourMinute} م`;
}

// Function to display prayer times in the HTML
function displayPrayerTimes() {
  const currentDate = new Date();
  const dayOfYear = getDayOfYear(currentDate);
  const prayerTime = getPrayerTime(dayOfYear);

  document.getElementById('WSalahFajr').textContent = formatTimeWithIndicator(prayerTime.Fajr);
  document.getElementById('WSalahSunrise').textContent = formatTimeWithIndicator(prayerTime.Sunrise);
  document.getElementById('WSalahZuhr').textContent = formatTimeWithIndicator(prayerTime.Zuhr);
  document.getElementById('WSalahAsr').textContent = formatTimeWithIndicator(prayerTime.Asr);
  document.getElementById('WSalahMaghrib').textContent = formatTimeWithIndicator(prayerTime.Maghrib);
  document.getElementById('WSalahIsha').textContent = formatTimeWithIndicator(prayerTime.Isha);

  updateCountdown(prayerTime);
}

// Function to parse time string to Date object
function parseTime(timeStr) {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return new Date().setHours(hours, minutes, 0, 0);
}

// Function to update the countdown
function updateCountdown(prayerTime) {
  const currentDate = new Date();
  const prayerTimes = [
    { time: parseTime(prayerTime.Fajr), name: 'الفجر' },
    { time: parseTime(prayerTime.Sunrise), name: 'الشروق' },
    { time: parseTime(prayerTime.Zuhr), name: 'الظهر' },
    { time: parseTime(prayerTime.Asr), name: 'العصر' },
    { time: parseTime(prayerTime.Maghrib), name: 'المغرب' },
    { time: parseTime(prayerTime.Isha), name: 'العشاء' }
  ];

  let nextPrayer;
  for (let prayer of prayerTimes) {
    if (prayer.time > currentDate) {
      nextPrayer = prayer;
      break;
    }
  }

  if (!nextPrayer) {
    // If no more prayers today, set the next prayer time to Fajr of the next day
    nextPrayer = new Date(prayerTimes[0]).setDate(currentDate.getDate() + 1);
  }

  const countdownElement = document.getElementById('countdown');
  function update() {
    const now = new Date();
    const distance = nextPrayer.time - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `باقي على ${nextPrayer.name} ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(interval);
      countdownElement.textContent = `وقت ${nextPrayer.name}`;
      displayNotification(nextPrayer.name);
      playPrayerSound();
      displayPrayerTimes(); // Update prayer times for the next day
    }
  }

  update();
  const interval = setInterval(update, 1000);
}

// Function to display notification
function displayNotification(prayerName) {
  if (Notification.permission === "granted") {
    new Notification(`أذان ${prayerName}`, {
      body: `حان الان موعد صلاة ${prayerName}`,
      icon: "notification_icon.jpg" // Add an appropriate icon image
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        displayNotification(prayerName);
      }
    });
  }
}

// Function to play prayer sound
function playPrayerSound() {
  const audio = new Audio('prayer_sound.mp3'); // Add your prayer sound file
  audio.play();
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        displayPrayerTimes();
      } else {
        displayPrayerTimes();
      }
    });
  } else {
    displayPrayerTimes();
  }
});


/* function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("MyClockDisplay").textContent = `الساعة الان ${time}`;

  setTimeout(showTime, 1000);
}

showTime(); */