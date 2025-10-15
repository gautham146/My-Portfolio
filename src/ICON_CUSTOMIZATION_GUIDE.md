# Icon Customization Guide

This guide explains how to change icons throughout Gautham Girish's portfolio website. All icons come from **Lucide React**, a clean and modern icon library.

---

## 📍 Table of Contents

1. [Leadership & Impact Icons](#leadership--impact-icons)
2. [Certificate Icons](#certificate-icons)
3. [Contact & Social Icons](#contact--social-icons)
4. [Medium Blog Icons](#medium-blog-icons)
5. [Available Icons Reference](#available-icons-reference)
6. [How to Find New Icons](#how-to-find-new-icons)

---

## Leadership & Impact Icons

**File:** `/components/ExpandableExtracurriculars.tsx`

### Current Icons (Line 5)

```tsx
import { Users, Award, BookOpen, PenTool, X } from 'lucide-react';
```

### Where Each Icon is Used

**Line 23:** Computer Science Club
```tsx
icon: Users,  // 👥 Group of people icon
```

**Line 47:** Debate Society
```tsx
icon: Award,  // 🏆 Trophy/Award icon
```

**Line 68:** Community Service Initiative
```tsx
icon: BookOpen,  // 📖 Open book icon
```

**Line 89:** University Tech Magazine
```tsx
icon: PenTool,  // ✏️ Pen/writing tool icon
```

### How to Change an Icon

**Step 1:** Find your new icon from [lucide.dev/icons](https://lucide.dev/icons)

**Step 2:** Import the new icon at the top of the file (line 5):

```tsx
// BEFORE
import { Users, Award, BookOpen, PenTool, X } from 'lucide-react';

// AFTER - Added "Trophy" icon
import { Users, Award, BookOpen, PenTool, Trophy, X } from 'lucide-react';
```

**Step 3:** Replace the icon in the activity object:

```tsx
// BEFORE - Computer Science Club used "Users"
{
  title: "Computer Science Club",
  role: "Vice President",
  icon: Users,  // ← Old icon
  // ... rest of properties
}

// AFTER - Now using "Trophy"
{
  title: "Computer Science Club",
  role: "Vice President",
  icon: Trophy,  // ← New icon
  // ... rest of properties
}
```

### Example: Complete Icon Change

Let's change the Debate Society from Award to MessageSquare (speech bubble):

```tsx
// 1. Update the import (line 5)
import { Users, Award, BookOpen, PenTool, MessageSquare, X } from 'lucide-react';

// 2. Update the icon property (around line 47)
{
  title: "Debate Society",
  role: "Active Member",
  icon: MessageSquare,  // ← Changed from Award to MessageSquare
  // ...
}
```

### Popular Icon Suggestions for Leadership Activities

| Activity Type | Suggested Icons |
|--------------|----------------|
| **Clubs & Organizations** | `Users`, `UsersRound`, `UserCheck`, `Users2` |
| **Awards & Achievements** | `Award`, `Trophy`, `Medal`, `Star` |
| **Teaching & Education** | `BookOpen`, `GraduationCap`, `School`, `BookText` |
| **Writing & Content** | `PenTool`, `Pencil`, `FileText`, `Edit` |
| **Technology & Coding** | `Code`, `Terminal`, `Laptop`, `Cpu` |
| **Public Speaking** | `Mic`, `MessageSquare`, `MessageCircle`, `Radio` |
| **Community Service** | `Heart`, `Users`, `HandHeart`, `UserPlus` |
| **Research** | `Search`, `FlaskConical`, `Microscope`, `FileSearch` |

---

## Certificate Icons

**File:** `/components/SimpleCertificates.tsx`

### Current Icons (Line 3)

```tsx
import { Award, FileText, X, ZoomIn } from 'lucide-react';
```

### Icon Usage

- `Award` - Default certificate icon (if no custom icon specified)
- `FileText` - Alternative certificate icon
- `X` - Close modal button
- `ZoomIn` - View certificate button

### How to Change Certificate Category Icons

Each certificate can have its own icon. Look for the `certificates` array (around line 6):

```tsx
const certificates = [
  {
    title: "Advanced Machine Learning",
    issuer: "Stanford University",
    date: "December 2023",
    // Add this line to specify a custom icon:
    icon: Trophy,  // ← Your custom icon
    // ...
  }
];
```

**Don't forget to import the icon!**

```tsx
// Add Trophy to the import
import { Award, FileText, Trophy, X, ZoomIn } from 'lucide-react';
```

### Popular Certificate Icon Suggestions

| Certificate Type | Suggested Icons |
|-----------------|-----------------|
| **Courses & Certifications** | `Award`, `Medal`, `Certificate` |
| **Academic Achievements** | `GraduationCap`, `BookOpen`, `School` |
| **Technical Skills** | `Code`, `Cpu`, `Terminal`, `Wrench` |
| **Professional Credentials** | `Briefcase`, `Shield`, `BadgeCheck` |
| **Creative Skills** | `Palette`, `Lightbulb`, `Sparkles` |

---

## Contact & Social Icons

**File:** `/components/RefinedContact.tsx`

### Current Icons (Line 3)

```tsx
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
```

### Where Each Icon is Used

**Email Icon (around line 97):**
```tsx
<Mail className="w-6 h-6" />
```

**Location Icon (around line 109):**
```tsx
<MapPin className="w-6 h-6" />
```

**GitHub Icon (around line 128):**
```tsx
<Github className="w-6 h-6" />
```

**LinkedIn Icon (around line 139):**
```tsx
<LinkedinIcon className="w-6 h-6" />
```

**Send Button Icon (around line 233):**
```tsx
<Send className="w-5 h-5" />
```

### How to Change Contact Icons

**Example:** Change GitHub to a different icon like Code

```tsx
// 1. Import the new icon
import { Mail, MapPin, Code, Linkedin, Send } from 'lucide-react';

// 2. Replace in the component (around line 128)
<Code className="w-6 h-6" />  // ← Changed from Github
```

### Popular Social & Contact Icon Suggestions

| Purpose | Suggested Icons |
|---------|----------------|
| **Email** | `Mail`, `AtSign`, `MessageCircle` |
| **Location** | `MapPin`, `Navigation`, `Home`, `Building` |
| **GitHub** | `Github` (official), `Code`, `GitBranch` |
| **LinkedIn** | `Linkedin` (official), `Briefcase`, `UserCheck` |
| **Twitter/X** | `Twitter`, `MessageCircle`, `AtSign` |
| **Website** | `Globe`, `Link`, `ExternalLink` |
| **Phone** | `Phone`, `Smartphone`, `MessageSquare` |

---

## Medium Blog Icons

**File:** `/components/MediumBlogs.tsx`

### Current Icons (Line 3)

```tsx
import { BookOpen, ArrowUpRight, Clock, TrendingUp } from 'lucide-react';
```

### Where Each Icon is Used

**Blog/Article Icon (around line 78):**
```tsx
<BookOpen className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
```

**External Link Icon (around line 129):**
```tsx
<ArrowUpRight className="w-5 h-5" />
```

**Read Time Icon (around line 95):**
```tsx
<Clock className="w-4 h-4" />
```

**Popular Posts Indicator:**
```tsx
<TrendingUp className="w-5 h-5" />
```

### How to Change Blog Icons

**Example:** Change BookOpen to Newspaper for articles

```tsx
// 1. Import
import { Newspaper, ArrowUpRight, Clock, TrendingUp } from 'lucide-react';

// 2. Replace (around line 78)
<Newspaper className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
```

---

## Available Icons Reference

Lucide React has **1,000+ icons** available. Here's how to find them:

### Method 1: Browse Online
Visit [lucide.dev/icons](https://lucide.dev/icons) to browse all available icons with search functionality.

### Method 2: Popular Categories

**Communication & Social:**
- `Mail`, `MessageCircle`, `MessageSquare`, `Send`, `Share`, `Share2`
- `Github`, `Linkedin`, `Twitter`, `Facebook`, `Instagram`

**Business & Work:**
- `Briefcase`, `Building`, `Building2`, `Users`, `Award`, `Trophy`
- `Target`, `TrendingUp`, `BarChart`, `PieChart`

**Education & Learning:**
- `BookOpen`, `Book`, `GraduationCap`, `School`, `Pencil`, `PenTool`
- `FileText`, `Folder`, `Archive`

**Technology:**
- `Code`, `Terminal`, `Laptop`, `Cpu`, `Server`, `Database`
- `Github`, `GitBranch`, `Download`, `Upload`

**Arrows & Navigation:**
- `ArrowRight`, `ArrowLeft`, `ArrowUp`, `ArrowDown`
- `ChevronRight`, `ChevronLeft`, `ExternalLink`
- `Send`, `Navigation`, `Compass`

**UI Elements:**
- `X`, `Plus`, `Minus`, `Check`, `AlertCircle`, `Info`
- `Search`, `Filter`, `Settings`, `Menu`, `MoreVertical`

**Creative:**
- `Palette`, `Lightbulb`, `Sparkles`, `Star`, `Heart`
- `Camera`, `Image`, `Film`, `Music`

---

## How to Find New Icons

### Step-by-Step Guide

**1. Visit Lucide Icons Website**
- Go to [https://lucide.dev/icons](https://lucide.dev/icons)

**2. Search for Your Icon**
- Use the search bar to find icons (e.g., "rocket", "heart", "code")
- Browse by category

**3. Copy the Icon Name**
- Click on any icon to see its name
- The name is in **PascalCase** (e.g., `Users`, `BookOpen`, `ArrowRight`)

**4. Import and Use**
```tsx
// Import the icon
import { YourIconName } from 'lucide-react';

// Use it in your component
<YourIconName className="w-6 h-6" />
```

### Icon Naming Patterns

Lucide icons follow consistent naming:

| Pattern | Example |
|---------|---------|
| **Single words** | `Mail`, `Phone`, `Book` |
| **Multiple words** | `BookOpen`, `UserPlus`, `FileText` |
| **With numbers** | `Users2`, `Building2`, `Star4` |
| **Directional** | `ArrowRight`, `ChevronLeft`, `TrendingUp` |

---

## Pro Tips

### 1. Icon Consistency
Keep icons within the same visual style throughout your portfolio. Lucide icons are designed to work together.

### 2. Icon Size Classes
Common Tailwind classes for icon sizes:
- `w-4 h-4` - Small (16px)
- `w-5 h-5` - Medium-Small (20px)
- `w-6 h-6` - Medium (24px)
- `w-8 h-8` - Large (32px)

### 3. Testing Changes
After changing an icon:
1. Save the file
2. Check that the import is correct
3. Verify the icon appears correctly on the page
4. Test responsiveness on mobile

### 4. Multiple Icons
When using multiple icons, import them all in one line:
```tsx
import { 
  Users, 
  Award, 
  BookOpen, 
  PenTool, 
  Trophy,
  Star 
} from 'lucide-react';
```

### 5. Icon Colors
You can customize icon colors with Tailwind:
- `text-gray-600` - Grey
- `text-black` - Black  
- `text-blue-600` - Blue
- `text-red-600` - Red
- Combine with hover: `text-gray-400 hover:text-gray-600`

---

## Quick Reference: Icon Locations

| Section | File | Line | Current Icons |
|---------|------|------|---------------|
| **Leadership** | `/components/ExpandableExtracurriculars.tsx` | 5 | `Users`, `Award`, `BookOpen`, `PenTool` |
| **Certificates** | `/components/SimpleCertificates.tsx` | 3 | `Award`, `FileText`, `ZoomIn` |
| **Contact** | `/components/RefinedContact.tsx` | 3 | `Mail`, `MapPin`, `Github`, `Linkedin`, `Send` |
| **Blogs** | `/components/MediumBlogs.tsx` | 3 | `BookOpen`, `ArrowUpRight`, `Clock`, `TrendingUp` |

---

## Need Help?

1. **Icon not showing?** Make sure you imported it at the top of the file
2. **Wrong icon name?** Check [lucide.dev/icons](https://lucide.dev/icons) for correct spelling
3. **Icon too big/small?** Adjust the `w-X h-X` Tailwind classes

---

**Happy Customizing! 🎨**
