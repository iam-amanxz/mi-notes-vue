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

    <!-- DatePickers -->
    <div class="filterBy">
      <div class="startDate">
        <p class="startDate__title">Start Date</p>
        <input type="date" name="startDate" class="dateInput" />
      </div>
      <div class="endDate">
        <p class="endDate__title">End Date</p>
        <input type="date" name="endDate" class="dateInput" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sortBy__title,
.startDate__title,
.endDate__title {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
}

.filterBar,
.filterBy {
  display: flex;
  align-items: flex-end;
}

.sort-by-date,
.dateInput {
  padding: 7px 10px;
  color: #aaaaaa;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  font-size: 14px;
}

.startDate,
.endDate {
  margin-left: 15px;
}

@media screen and (max-width: 768px) {
  .filterBar {
    width: 100%;
    justify-content: space-between;
  }

  .sort-by-date,
  .dateInput {
    padding: 5px 5px;
  }

  .startDate,
  .endDate {
    margin-left: 5px;
  }
}
</style>
