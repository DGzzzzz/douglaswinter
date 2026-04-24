<template>
  <div class="social-links">
    <a
      href="https://www.linkedin.com/in/dg-developer/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <i class="ri-linkedin-fill"></i>
    </a>
    <a
      href="https://wa.me/5551996245171?text=Oi%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <i class="ri-whatsapp-fill"></i>
    </a>
    <a
      href="https://www.instagram.com/douglas_winter96/?hl=pt-br"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <i class="ri-instagram-fill"></i>
    </a>
    <a
      href="https://github.com/DGzzzzz"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <i class="ri-github-fill"></i>
    </a>
    <a
      href="https://discord.gg/Zun2bDpMDU"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discord"
    >
      <i class="ri-discord-fill"></i>
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.social-links a {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-icon);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.social-links a:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px var(--shadow-hover);
}
</style>
