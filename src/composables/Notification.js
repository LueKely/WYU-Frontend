export default {
  warn($q, message) {
    $q.notify({
      message,
      color: "warning",
      icon: "warning",
    });
  },
  success($q, message) {
    $q.notify({
      message,
      color: "positive",
      icon: "check_circle",
    });
  },
};
