<script>
  const input = document.querySelector(".keyboard-input");
  document.querySelectorAll(".soap-key").forEach(key => {
    key.addEventListener("click", () => {
      input.value += key.textContent;
      input.focus();
    });
  });
</script>
