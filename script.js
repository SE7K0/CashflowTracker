/**
 * Cashflow App Launcher & Portfolio Script
 * Zero Dependency, Clean Vanilla JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Setup Direct Download URL & Dynamic QR Code
  const qrImage = document.getElementById("qr-image");
  const rawUrlEl = document.getElementById("raw-url");
  const copyBtn = document.getElementById("btn-copy");

  // Determine current absolute download link
  let downloadUrl = "downloads/CashflowApp.apk";
  if (window.location.protocol.startsWith("http")) {
    const origin = window.location.origin;
    const path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
    downloadUrl = `${origin}${path}/downloads/CashflowApp.apk`;
  }

  if (rawUrlEl) {
    rawUrlEl.textContent = downloadUrl;
  }

  if (qrImage) {
    // Generate QR using standard QR API
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(downloadUrl)}`;
    qrImage.alt = "QR Code Download Cashflow APK";
  }

  // 2. Copy Link to Clipboard
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(downloadUrl);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span>✓ Link Tersalin!</span>`;
        copyBtn.style.borderColor = "var(--primary)";
        copyBtn.style.color = "var(--primary)";
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.borderColor = "";
          copyBtn.style.color = "";
        }, 2000);
      } catch (err) {
        // Fallback prompt
        prompt("Salin link unduhan APK berikut:", downloadUrl);
      }
    });
  }

  // 3. Phone Mockup Screenshot Switcher
  const screenImg = document.getElementById("hero-screen-img");
  const thumbBtns = document.querySelectorAll(".thumb-btn");

  thumbBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      thumbBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const newSrc = btn.getAttribute("data-src");
      if (screenImg && newSrc) {
        screenImg.style.opacity = "0.2";
        setTimeout(() => {
          screenImg.src = newSrc;
          screenImg.style.opacity = "1";
        }, 150);
      }
    });
  });

  // 4. FAQ Accordion
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parent = header.closest(".accordion-item");
      const isActive = parent.classList.contains("active");

      // Close all other items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Toggle current item
      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });

  // 5. Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  // 6. Security Info Modal
  const modal = document.getElementById("security-modal");
  const openModalBtns = document.querySelectorAll(".open-security-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) modal.classList.add("open");
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (modal) modal.classList.remove("open");
    });
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  }
});
