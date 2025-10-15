# Medium Blogs Setup Guide

This guide explains how to add your own Medium articles to the **Writing & Insights** section of your portfolio.

## Location
The Medium Blogs section is located in `/components/MediumBlogs.tsx`

---

## Quick Start: Adding Your Medium Articles

### Step 1: Open the File
Navigate to `/components/MediumBlogs.tsx` in your code editor.

### Step 2: Find the blogs Array
Look for the `blogs` constant near the top of the component (around lines 6-23):

```tsx
const blogs = [
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Exploring emerging technologies and paradigm shifts...",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    views: "2.4K",
    link: "https://medium.com/@your-profile/article-slug-1"
  },
  // ... more articles
];
```

### Step 3: Replace with Your Articles
Replace the placeholder articles with your actual Medium articles.

---

## How to Get Your Medium Article Information

### Getting the Article URL

1. **Go to Medium.com** and navigate to your profile
2. **Click on your article** 
3. **Copy the full URL** from your browser's address bar
   - Example: `https://medium.com/@gautham-girish/building-better-interfaces-a1b2c3d4e5f6`
   - Or: `https://gautham-girish.medium.com/building-better-interfaces-a1b2c3d4e5f6`

**Both URL formats work perfectly!**

### Getting Article Metadata

When you're on your Medium article page, you can find:

- **Title**: The main headline at the top of your article
- **Excerpt**: The subtitle or first 1-2 sentences of your article (keep it concise - about 100-150 characters)
- **Date**: When you published the article (Format: "Jan 15, 2025" or "Dec 28, 2024")
- **Read Time**: Shown at the top of your article (e.g., "5 min read", "8 min read")
- **Views**: Visible in your Medium stats dashboard (optional - you can estimate or leave as is)

---

## Complete Example: Adding Your Own Article

### Before (Placeholder):
```tsx
const blogs = [
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Exploring emerging technologies and paradigm shifts shaping modern web development, from AI-assisted coding to edge computing.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    views: "2.4K",
    link: "https://medium.com/@your-profile/article-slug-1"
  }
];
```

### After (Your Real Article):
```tsx
const blogs = [
  {
    title: "How I Built My First Trading Bot with Python",
    excerpt: "A beginner's journey into algorithmic trading, exploring data analysis, API integration, and machine learning predictions.",
    date: "Oct 3, 2025",
    readTime: "7 min read",
    views: "1.2K",
    link: "https://medium.com/@gautham-girish/trading-bot-python-journey"
  }
];
```

---

## Adding Multiple Articles

Simply add more objects to the `blogs` array, separated by commas:

```tsx
const blogs = [
  {
    title: "First Article Title",
    excerpt: "First article description...",
    date: "Oct 3, 2025",
    readTime: "7 min read",
    views: "1.2K",
    link: "https://medium.com/@gautham-girish/first-article"
  },
  {
    title: "Second Article Title",
    excerpt: "Second article description...",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    views: "850",
    link: "https://medium.com/@gautham-girish/second-article"
  },
  {
    title: "Third Article Title",
    excerpt: "Third article description...",
    date: "Aug 22, 2025",
    readTime: "10 min read",
    views: "2.1K",
    link: "https://medium.com/@gautham-girish/third-article"
  }
];
```

**Pro Tip:** List articles in reverse chronological order (newest first) for the best presentation.

---

## Removing Articles

To remove an article, simply delete its entire object from the array:

```tsx
const blogs = [
  {
    title: "First Article Title",
    excerpt: "First article description...",
    date: "Oct 3, 2025",
    readTime: "7 min read",
    views: "1.2K",
    link: "https://medium.com/@gautham-girish/first-article"
  },
  // REMOVED: Second article deleted here
  {
    title: "Third Article Title",
    excerpt: "Third article description...",
    date: "Aug 22, 2025",
    readTime: "10 min read",
    views: "2.1K",
    link: "https://medium.com/@gautham-girish/third-article"
  }
];
```

---

## What If I Don't Have Medium Articles Yet?

### Option 1: Remove the Section Entirely
If you haven't published any Medium articles yet, you can hide the section:

1. Go to `/App.tsx`
2. Find this line (around line 65):
   ```tsx
   <MediumBlogs />
   ```
3. Comment it out or delete it:
   ```tsx
   {/* <MediumBlogs /> */}
   ```

### Option 2: Keep One Placeholder Article
You can keep a single placeholder article with a message:

```tsx
const blogs = [
  {
    title: "Coming Soon: My Thoughts on Tech & Innovation",
    excerpt: "Currently working on my first Medium article. Stay tuned for insights on development, AI research, and building cool projects.",
    date: "Coming Soon",
    readTime: "—",
    views: "—",
    link: "#" // No link for now
  }
];
```

---

## Full Template for Your Use

Copy and paste this template and fill in your own information:

```tsx
const blogs = [
  {
    title: "YOUR ARTICLE TITLE HERE",
    excerpt: "A brief 100-150 character description of your article that gives readers a preview of what to expect.",
    date: "Oct 5, 2025",           // ← Format: "Month Day, Year"
    readTime: "X min read",         // ← Get this from your Medium article
    views: "X.XK",                  // ← Optional: From Medium stats (e.g., "1.2K", "850")
    link: "YOUR_MEDIUM_URL_HERE"    // ← Full Medium article URL
  },
  // Add more articles here following the same format
];
```

---

## Troubleshooting

### My Medium link doesn't work
- Make sure you copied the **full URL** including `https://`
- Both `medium.com/@username/` and `username.medium.com/` formats work
- The article must be **published** (not a draft) for the link to work

### The excerpt is too long
- Keep excerpts between 100-150 characters for best display
- If your excerpt is too long, it will wrap to multiple lines
- Try to summarize the key point in one sentence

### I want to change the section title
Find this line (around line 42-43):
```tsx
<h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
  Writing & Insights
</h2>
```

Change `Writing & Insights` to whatever you prefer:
- `My Medium Articles`
- `Blog Posts`
- `Thoughts & Ideas`
- `Latest Writing`

### I want to change the subtitle
Find this line (around line 45-47):
```tsx
<p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
  Thoughts on technology, design, and the intersection of creativity and code
</p>
```

Replace with your own subtitle.

---

## Article Object Structure Reference

Here's what each field means:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | String | Your article's main headline | `"Building Better Interfaces"` |
| `excerpt` | String | Brief 100-150 char summary | `"A deep dive into UI/UX principles..."` |
| `date` | String | Publication date | `"Oct 5, 2025"` |
| `readTime` | String | How long to read (from Medium) | `"5 min read"` |
| `views` | String | View count (optional) | `"1.2K"` or `"850"` |
| `link` | String | Full Medium article URL | `"https://medium.com/@user/article"` |

---

## Pro Tips

1. **Order Matters**: List your best or most recent articles first
2. **Consistent Formatting**: Keep date format consistent (e.g., all "Month Day, Year")
3. **Quality over Quantity**: 2-4 strong articles are better than 10 mediocre ones
4. **Update Regularly**: As you publish new articles, add them to the top of the array
5. **Views Are Optional**: If you don't want to show views, you can remove that metadata (see Advanced Customization below)

---

## Advanced: Removing View Count Display

If you don't want to display view counts:

1. Remove the `views` field from all blog objects
2. Find this section in the code (around lines 96-99):
```tsx
<div className="flex items-center gap-2 text-gray-500">
  <TrendingUp className="w-4 h-4" />
  <span className="text-sm">{blog.views} views</span>
</div>
```
3. Delete or comment it out

---

**That's it!** Your Medium articles will now be beautifully displayed in your portfolio. Remember to save the file after making changes.
