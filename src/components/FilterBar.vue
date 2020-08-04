<template>
  <div class="filterBar">
    <!-- SortBy -->
    <div class="sortBy">
      <p class="sortBy__title">Sort by</p>
      <select class="sort-by-date">
        <option value="created">Date asc</option>
        <option value="modified">Date desc</option>
      </select>
    </div>

    <div class="filterBy"></div>

    <!-- DatePickers -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sortBy__title {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
}

.sort-by-date {
  padding: 7px 10px;
  color: #aaaaaa;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  font-size: 14px;
}
</style>
