# Contact Page Setup Guide

This guide explains how to set up your contact page with your actual links and enable people to reach out to you.

## Table of Contents
1. [Quick Setup - Contact Information](#quick-setup---contact-information)
2. [Setting Up Email Functionality](#setting-up-email-functionality)
3. [Advanced Setup - Form Backend](#advanced-setup---form-backend)
4. [Testing Your Contact Page](#testing-your-contact-page)

---

## Quick Setup - Contact Information

### Step 1: Update Your Contact Details

Open `/components/RefinedContact.tsx` and find the `contactMethods` array (around line 25).

Replace the placeholder values with your actual information:

```tsx
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.actual.email@gmail.com',  // ← Change this
    href: 'mailto:your.actual.email@gmail.com'  // ← Change this too
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, State/Country',  // ← Change this
    href: null  // Keep as null (not a link)
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@yourusername',  // ← Change this
    href: 'https://github.com/yourusername'  // ← Change this
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Your Name',  // ← Change this
    href: 'https://linkedin.com/in/yourusername'  // ← Change this
  }
];
```

### Step 2: Update Copyright Year

Find the footer section (around line 218) and update:

```tsx
<p className="text-gray-400 text-sm font-light">
  © 2025 Your Name. Designed and developed with attention to detail.
</p>
```

---

## Setting Up Email Functionality

Currently, the contact form just logs to the console. Here are different ways to make it actually send you messages:

### Option 1: Using Mailto (Simple, No Backend Required)

This is the easiest option. The form will open the user's email client.

**Update the `handleSubmit` function:**

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Create mailto link with form data
  const subject = `Portfolio Contact from ${formData.name}`;
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  const mailtoLink = `mailto:your.email@gmail.com?subject=${subject}&body=${body}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Clear form
  setFormData({ name: '', email: '', message: '' });
};
```

**Pros:** 
- No backend needed
- Works immediately
- Free

**Cons:** 
- Requires user to have email client set up
- Less professional user experience

---

### Option 2: Using FormSubmit (Recommended - Easy & Free)

[FormSubmit](https://formsubmit.co/) is a free service that sends form submissions to your email.

**Step 1:** Update the form element:

```tsx
<form 
  action="https://formsubmit.co/your-email@example.com" 
  method="POST"
  className="space-y-6"
>
```

**Step 2:** Add hidden fields for FormSubmit configuration:

```tsx
<form 
  action="https://formsubmit.co/your-email@example.com" 
  method="POST"
  className="space-y-6"
>
  {/* Hidden FormSubmit configuration */}
  <input type="hidden" name="_subject" value="New portfolio contact!" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  
  {/* Rest of your form fields... */}
```

**Step 3:** Remove the `handleSubmit` function and state management (or keep for validation).

**Pros:**
- Free
- No backend needed
- Professional experience
- Spam protection

**Cons:**
- Relies on third-party service
- First submission requires email confirmation

---

### Option 3: Using EmailJS (Free tier available)

[EmailJS](https://www.emailjs.com/) allows you to send emails using JavaScript.

**Step 1:** Sign up at emailjs.com and get your credentials.

**Step 2:** Install EmailJS (it's already available in this environment):

```tsx
import emailjs from '@emailjs/browser';
```

**Step 3:** Update your component:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    'YOUR_PUBLIC_KEY'
  )
  .then((result) => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    alert('Failed to send message. Please try again.');
    console.error(error);
  });
};
```

**Pros:**
- Free tier (200 emails/month)
- Professional
- Reliable

**Cons:**
- Requires account setup
- API keys visible in code

---

### Option 4: Using Formspree (Free tier available)

[Formspree](https://formspree.io/) is another popular form backend service.

**Step 1:** Sign up at formspree.io and create a form to get your endpoint.

**Step 2:** Update the form:

```tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  className="space-y-6"
>
```

**Pros:**
- Free tier (50 submissions/month)
- Easy setup
- Spam protection
- Email notifications

**Cons:**
- Limited free tier
- Relies on third-party service

---

## Advanced Setup - Form Backend

If you want full control and are comfortable with backend development, you can set up your own backend.

### Using Supabase (Recommended for this project)

Since Figma Make has Supabase integration, you can store form submissions in a database.

**Step 1:** Create a Supabase table for contacts:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Step 2:** Update the form submission:

```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const { data, error } = await supabase
    .from('contacts')
    .insert([formData]);
  
  if (error) {
    alert('Error sending message. Please try again.');
    console.error(error);
  } else {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }
};
```

---

## Testing Your Contact Page

### 1. Test Contact Links

Click on each contact method to verify:

- ✅ Email opens your email client with correct address
- ✅ GitHub link opens your GitHub profile
- ✅ LinkedIn link opens your LinkedIn profile
- ✅ Location displays correctly (no link needed)

### 2. Test Form Submission

Fill out the form and submit to verify:

- ✅ Form validation works (try submitting empty)
- ✅ Email is received (check your inbox)
- ✅ Form clears after successful submission
- ✅ User sees confirmation message

### 3. Mobile Testing

Test on mobile devices:

- ✅ Email link opens mobile email app
- ✅ Social links open respective apps if installed
- ✅ Form is easy to fill on mobile
- ✅ Submit button is easily tappable

---

## Recommended Setup for Beginners

**For the easiest setup, I recommend FormSubmit:**

1. Replace `your.email@example.com` in the contact methods
2. Update the form action to use FormSubmit:

```tsx
<form 
  action="https://formsubmit.co/your.email@example.com" 
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="_subject" value="New Portfolio Contact!" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="https://your-portfolio-url.com/#contact" />
  
  {/* Your existing form fields... */}
</form>
```

3. Update your GitHub and LinkedIn URLs
4. Test by submitting the form
5. Check your email for confirmation (first time only)
6. Click the confirmation link
7. Test again - you should receive form submissions!

---

## Common Issues & Solutions

### Issue: Email links not working on mobile
**Solution:** Make sure your mailto links are properly formatted:
```tsx
href: 'mailto:email@example.com'
```

### Issue: Form submission not working
**Solution:** Check browser console for errors. Make sure you're using the correct FormSubmit email or API keys.

### Issue: Spam submissions
**Solution:** Add honeypot field or use FormSubmit's captcha:
```tsx
<input type="hidden" name="_captcha" value="true" />
```

### Issue: Want to redirect after submission
**Solution:** Add this hidden field (FormSubmit):
```tsx
<input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
```

---

## Quick Checklist

- [ ] Updated email address in contact methods
- [ ] Updated GitHub profile URL
- [ ] Updated LinkedIn profile URL
- [ ] Updated location/city
- [ ] Updated copyright year and name
- [ ] Chose and implemented a form backend option
- [ ] Tested email link
- [ ] Tested GitHub link
- [ ] Tested LinkedIn link
- [ ] Tested form submission
- [ ] Received test email successfully
- [ ] Tested on mobile device

---

## Need More Help?

If you're still having trouble:

1. Check the browser console for error messages
2. Verify all URLs are correct (no typos)
3. Test each link individually
4. For form issues, try the mailto option first to verify basic functionality
5. Make sure you've confirmed your email with FormSubmit (if using that option)

Good luck! 🚀
