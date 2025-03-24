async function mergeObjects() {
  const payloadInput = document.getElementById('payload');
  const resultDiv = document.getElementById('result');

  try {
    const payload = JSON.parse(payloadInput.value);

    const response = await fetch('/api/merge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: payload })
    });

    const result = await response.json();

    // Demonstrate the pollution
    const testObj = {};
    resultDiv.innerHTML = `
            <h4>Merge Result:</h4>
            <pre>${JSON.stringify(result, null, 2)}</pre>
            <h4>Prototype Pollution Check:</h4>
            <pre>testObj.polluted: ${testObj.polluted}</pre>
        `;
  } catch (error) {
    resultDiv.innerHTML = `<div class="text-danger">Error: ${error.message}</div>`;
  }
}

async function checkDebug() {
  const payloadInput = document.getElementById('payload');
  const resultDiv = document.getElementById('result');

  try {
    const payload = JSON.parse(payloadInput.value);

    const response = await fetch('/api/debug', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: payload })
    });

    const result = await response.json();

    if (response.ok) {
      resultDiv.innerHTML = `
                <h4>Debug Property Value:</h4>
                <pre>${JSON.stringify(result, null, 2)}</pre>
            `;
    } else {
      resultDiv.innerHTML = `
                <div class="text-danger">
                    <h4>Error:</h4>
                    <pre>${result.error}</pre>
                </div>
            `;
    }
  } catch (error) {
    resultDiv.innerHTML = `<div class="text-danger">Error: ${error.message}</div>`;
  }
} 