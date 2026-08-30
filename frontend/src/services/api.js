const API_URL = import.meta.env.VITE_API_URL || "/api";

export async function predictMentalHealth(studentData) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
      signal: controller.signal,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      let message = "Prediction failed.";

      if (data?.detail) {
        if (Array.isArray(data.detail)) {
          message = data.detail
            .map((error) => {
              const field = error.loc?.[error.loc.length - 1] || "field";
              return `${field}: ${error.msg}`;
            })
            .join("\n");
        } else {
          message = data.detail;
        }
      }

      throw new Error(message);
    }

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Please try after some time.", {
        cause: error,
      });
    }

    if (error instanceof TypeError) {
      throw new Error("Unable to connect to the prediction server.", {
        cause: error,
      });
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/`);

  if (!response.ok) {
    throw new Error("API is not available.");
  }

  return response.json();
}
