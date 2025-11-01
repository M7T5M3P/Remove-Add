## Installation (Chrome & Arc Browser)

### 1️⃣ Create Extension Folder

Create a folder named:

```
remove-footer-popup
```

Inside it, create **two files**:

**manifest.json**

```json
{
  "manifest_version": 3,
  "name": "Remove Donation Footer Popup",
  "version": "1.0",
  "description": "Removes the donation footer popup div from websites.",
  "permissions": ["scripting", "activeTab"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_idle"
    }
  ]
}
```

**content.js**

```js
function removeDonationDiv() {
  const el = document.querySelector("div.bottomdiv#footer");
  if (el) {
    el.remove();
    console.log("[Extension] Donation popup removed.");
  }
}

removeDonationDiv();

const observer = new MutationObserver(removeDonationDiv);
observer.observe(document.body, { childList: true, subtree: true });
```

---

### 2️⃣ Open Extensions Page

Paste this into the browser address bar:

```
chrome://extensions/
```

(Works for Chrome **and** Arc)

---

### 3️⃣ Enable Developer Mode

Toggle **Developer mode** ON (top-right)

---

### 4️⃣ Load the Extension

Click **Load unpacked**
Select your `remove-footer-popup` folder ✔️

---

### ✅ Finished!

The popup will now automatically disappear on pages that use it.

---

### ♻️ Update the Extension

If you change the files:

- Go back to `chrome://extensions/`
- Click **Reload** under the extension

---

### ❌ Remove Extension

Go to `chrome://extensions/`
Click **Remove**
