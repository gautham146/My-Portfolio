# Skills & Expertise Bar Customization Guide

This guide explains how to adjust the fill levels of the progress bars in the **Skills & Expertise** section.

## Location
The Skills & Expertise section is located in `/components/HorizontalSkills.tsx`

## How to Change Bar Fill Levels

### Step 1: Open the File
Navigate to `/components/HorizontalSkills.tsx` in your code editor.

### Step 2: Find the skillCategories Array
Look for the `skillCategories` constant near the top of the component (around lines 6-32). It looks like this:

```tsx
const skillCategories = [
  {
    category: "Development",
    description: "Building & experimenting with code",
    skills: [
      { name: 'JavaScript', level: 72 },
      { name: 'Python', level: 68 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'React', level: 61 }
    ]
  },
  // ... more categories
];
```

### Step 3: Understand the Level System
- Each skill has a `level` value ranging from **0 to 100**
- The `level` represents the percentage of the bar that will be filled
- **Example values:**
  - `level: 50` = Bar is 50% filled (half-way)
  - `level: 75` = Bar is 75% filled (three-quarters)
  - `level: 100` = Bar is completely filled
  - `level: 25` = Bar is only 25% filled (one-quarter)

### Step 4: Modify the Levels

To change how filled a specific skill bar is, simply change its `level` value:

```tsx
// BEFORE - JavaScript bar is 75% filled
{ name: 'JavaScript', level: 75 }

// AFTER - JavaScript bar is now 90% filled
{ name: 'JavaScript', level: 90 }
```

## Complete Example

Here's the full `skillCategories` with all customizable levels:

```tsx
const skillCategories = [
  {
    category: "Development",
    description: "Building & experimenting with code",
    skills: [
      { name: 'JavaScript', level: 72 },    // ← Change this number (0-100)
      { name: 'Python', level: 68 },        // ← Change this number (0-100)
      { name: 'HTML & CSS', level: 85 },    // ← Change this number (0-100)
      { name: 'React', level: 61 }          // ← Change this number (0-100)
    ]
  },
  {
    category: "Analysis & AI",
    description: "Exploring data & intelligent systems",
    skills: [
      { name: 'Data Analysis', level: 73 },    // ← Change this number (0-100)
      { name: 'Trading Systems', level: 58 },  // ← Change this number (0-100)
      { name: 'Machine Learning', level: 52 }, // ← Change this number (0-100)
      { name: 'Research', level: 78 }          // ← Change this number (0-100)
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Daily essentials for productivity",
    skills: [
      { name: 'Git & GitHub', level: 69 },  // ← Change this number (0-100)
      { name: 'VS Code', level: 82 },       // ← Change this number (0-100)
      { name: 'Figma', level: 63 },         // ← Change this number (0-100)
      { name: 'Linux', level: 56 }          // ← Change this number (0-100)
    ]
  }
];
```

## Adding New Skills

To add a new skill to a category:

```tsx
skills: [
  { name: 'JavaScript', level: 75 },
  { name: 'TypeScript', level: 65 },  // ← NEW SKILL ADDED
  { name: 'Python', level: 70 },
  { name: 'HTML & CSS', level: 80 },
  { name: 'React', level: 65 }
]
```

## Removing Skills

To remove a skill, simply delete its entire line:

```tsx
skills: [
  { name: 'JavaScript', level: 75 },
  // REMOVED: { name: 'Python', level: 70 },
  { name: 'HTML & CSS', level: 80 },
  { name: 'React', level: 65 }
]
```

## Recommended Level Ranges

For an authentic "curious student" vibe:
- **Beginner/Learning:** 40-60
- **Comfortable/Developing:** 60-75
- **Confident/Experienced:** 75-85
- **Advanced:** 85-95

**Note:** Avoid using 95-100 unless you truly have mastery-level expertise, as the design is meant to portray honest, developing skills.

## Visual Reference

```
level: 25  ████░░░░░░░░░░░░
level: 50  ████████░░░░░░░░
level: 75  ████████████░░░░
level: 100 ████████████████
```

## Tips

1. **Be Honest:** The bars should reflect your actual skill level
2. **Show Growth:** It's okay to have some bars at 50-60% - it shows you're learning
3. **Balance:** Not every skill needs to be 80%+
4. **Consistency:** Try to maintain relative consistency (if you're better at Python than JavaScript, Python's level should be higher)

## Bar Color Customization

The skill bars are currently **black** (`bg-black`). If you want to change the color:

1. Find this section in the file (around lines 81-85):
```tsx
{/* Top layer: Black bar (fills in after grey appears) */}
<motion.div
  className="absolute inset-y-0 left-0 bg-black rounded-full"
  // ... animation code
/>
```

2. Replace `bg-black` with any Tailwind color:
- `bg-blue-600` - Blue bars
- `bg-purple-600` - Purple bars
- `bg-green-600` - Green bars
- `bg-gray-800` - Dark gray bars
- `bg-gradient-to-r from-blue-600 to-purple-600` - Gradient bars

## How the Animation Works

The skill bars use a **two-layer system**:
1. **Bottom Layer (Grey)**: Full-width light grey bar that fades in first
2. **Top Layer (Black)**: Slides from 0% to the skill level, overlaying the grey

**Animation Sequence:**
1. When you scroll to the Skills section, grey bars fade in (0.5s)
2. After a short delay (0.3s), black bars slide in from left to right
3. Black bars stop at the skill level (e.g., 72%, 85%)
4. Result: Black = filled portion, Grey = unfilled portion

**Note:** The bars animate once when you scroll to the Skills & Expertise section.

---

**That's it!** After making changes, save the file and your skill bars will automatically update with the new fill levels.
