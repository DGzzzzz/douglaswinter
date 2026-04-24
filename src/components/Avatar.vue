<template>
  <div class="avatar">
    <img src="../../public/logo_azul.png" alt="Douglas Winter" />
  </div>
</template>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.avatar img {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  border: none;
  object-fit: cover;
  /* gap com a cor do fundo + anel externo semitransparente + sombra */
  box-shadow:
    0 0 0 4px var(--bg),
    0 0 0 6px var(--avatar-ring),
    0 6px 24px var(--shadow);
  transition: box-shadow 0.3s ease;
}

.avatar img:hover {
  box-shadow:
    0 0 0 4px var(--bg),
    0 0 0 6px var(--avatar-ring-hover),
    0 8px 32px var(--shadow-hover);
}

</style>
