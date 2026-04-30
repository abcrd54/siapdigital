const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.dataset.gaId = GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }

  window.gtag = window.gtag || gtag;
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}

export function trackLead(action, params = {}) {
  trackEvent("generate_lead", {
    action,
    ...params,
  });
}

export function trackNavigation(target, params = {}) {
  trackEvent("select_content", {
    content_type: "navigation",
    item_id: target,
    ...params,
  });
}

export function trackModal(modalName, action = "open", params = {}) {
  trackEvent(action === "close" ? "close_modal" : "view_item_list", {
    item_list_name: modalName,
    ...params,
  });
}

export function trackPortfolioView(projectTitle, params = {}) {
  trackEvent("view_item", {
    item_name: projectTitle,
    item_category: "portfolio",
    ...params,
  });
}
