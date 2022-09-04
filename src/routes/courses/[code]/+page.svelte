<script>
  export let data;
  const course = data.course;

</script>
<h1>{course.title}</h1>
<aside>
  <nav class="secondary">
    <ul>
      <li><a href="{course.code}/assessments">Assessments</a></li>
    </ul>
  </nav>
</aside>
