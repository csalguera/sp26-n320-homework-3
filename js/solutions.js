// ============================================================
//  solutions.js — SnapGrid Social Media Dashboard
//  Assignment 3: JavaScript DOM Manipulation & Event Handling
//
//  Name:   ___________________________
//  Date:   ___________________________
// ============================================================
//
//  INSTRUCTIONS:
//  • Write all your code in this file — do not modify index.html or styles.css
//  • Test each task in the browser before moving on
//  • Recommended order: Tasks 1 → 2 → 4 → 3 → 5
//    (Task 3's Post Composer calls Task 4's attachLikeListeners(),
//     so it helps to have Task 4 written first)
// ============================================================

// ============================================================
//  TASK 1 — Dark / Light Mode Toggle  (3 points)
//
//  TODO:
//  1. Select #themeToggleBtn, #themeIcon, and #themeLabel
//  2. Declare:  let isDark = true
//  3. Add a 'click' event listener to the button
//  4. Inside the listener:
//     a. Flip isDark using !isDark
//     b. If isDark is now true:
//          - document.documentElement.setAttribute('data-theme', 'dark')
//          - Set #themeIcon text to '🌙'
//          - Set #themeLabel text to 'Dark Mode'
//     c. If isDark is now false:
//          - Set data-theme attribute to 'light'
//          - Set #themeIcon text to '☀️'
//          - Set #themeLabel text to 'Light Mode'
// ============================================================

// YOUR CODE HERE

// ============================================================
//  TASK 2 — Follow / Unfollow with Live Counter  (4 points)
//
//  TODO:
//  1. Select #followBtn, #followBtnText, and #followerCount
//  2. Declare:  let isFollowing = false
//              let followers   = 1284
//  3. Add a 'click' event listener to #followBtn
//  4. Inside the listener:
//     a. Flip isFollowing
//     b. If now following:
//          - followers++
//          - Set #followBtnText to '✅ Following'
//          - Add class 'following' to #followBtn
//     c. If now unfollowed:
//          - followers--
//          - Set #followBtnText to '➕ Follow'
//          - Remove class 'following' from #followBtn
//     d. In both cases, update #followerCount.textContent
//        to followers.toLocaleString()
// ============================================================

// YOUR CODE HERE

// ============================================================
//  TASK 3 — Live Post Composer  (5 points)
//  ⭐ Tip: Complete Task 4 first — you need to call
//     attachLikeListeners() inside this task.
//
//  TODO:
//  1. Select #composerTextarea, #charCounter, #postBtn,
//     #postFeed, and #postCount
//
//  2. Add an 'input' event listener to #composerTextarea:
//     a. remaining = 280 - textarea.value.length
//     b. Update #charCounter text to "X characters remaining"
//     c. If remaining < 20, add class 'counter-warning'
//        to #charCounter; otherwise remove it
//     d. Disable #postBtn if textarea value is empty (after trim);
//        enable it otherwise
//
//  3. Add a 'click' event listener to #postBtn:
//     a. Get postText = composerTextarea.value.trim()
//     b. Create a new <article> element (document.createElement)
//        - Add classes:  post-card  new-post
//        - Set data-tags attribute (extract hashtags from text or leave "")
//     c. Set its innerHTML using the template from the task instructions
//        (remember to drop postText into the <p class="post-body">)
//     d. postFeed.prepend(newPost)
//     e. Call attachLikeListeners() so the new heart button works
//     f. Reset the textarea, counter text, remove counter-warning,
//        disable the post button
//     g. Increment and update #postCount
// ============================================================

// YOUR CODE HERE

// ============================================================
//  TASK 4 — Like / Unlike Posts  (4 points)
//  ⭐ Write this as a NAMED FUNCTION — Task 3 calls it.
//
//  TODO:
//  1. Define:  function attachLikeListeners() { ... }
//  2. Inside it:
//     a. Select all .like-btn elements
//     b. Loop with forEach
//     c. For each btn, clone it to remove old listeners:
//          const fresh = btn.cloneNode(true);
//          btn.parentNode.replaceChild(fresh, btn);
//     d. Add a 'click' listener to 'fresh':
//          - Read liked state:
//            const alreadyLiked = fresh.getAttribute('data-liked') === 'true'
//          - Get count from .like-count span inside the button (parseInt)
//          - If alreadyLiked:
//              set data-liked to 'false', remove class 'liked',
//              icon → '🤍', count - 1
//          - Else:
//              set data-liked to 'true', add class 'liked',
//              icon → '❤️', count + 1
//          - Call updateTotalLikes()
//
//  3. Define:  function updateTotalLikes() { ... }
//     a. Count all .like-btn[data-liked="true"] elements
//     b. Update #totalLikedCount with that number
//
//  4. Call attachLikeListeners() at the bottom of this section
//     to wire up the initial posts.
// ============================================================

// YOUR CODE HERE

// ============================================================
//  TASK 5 — Hashtag Filter  (4 points)
//
//  TODO:
//  1. Select all .tag-pill elements and #filterResultMsg
//  2. Loop through the pills with forEach and add a 'click'
//     listener to each
//  3. Inside the listener:
//     a. Remove class 'active' from ALL pills, then add it to
//        the clicked one only
//     b. Get the tag: pill.getAttribute('data-tag')
//     c. Get all .post-card elements inside #postFeed
//        Use Array.from() so you can use .filter() later
//     d. Loop through posts:
//          - If tag === 'all': remove class 'hidden' from every post
//          - Otherwise: check if post's data-tags includes(tag)
//              yes → remove 'hidden'
//              no  → add 'hidden'
//     e. Count visible posts:
//          posts.filter(p => !p.classList.contains('hidden')).length
//     f. Update #filterResultMsg:
//          'all' tag   → "Showing all X posts"
//          other tags  → "X post(s) tagged #tagname"
// ============================================================

// YOUR CODE HERE

const themeToggleBtnRef = document.querySelector("#themeToggleBtn");
const themeIconRef = document.querySelector("#themeIcon");
const themeLabelRef = document.querySelector("#themeLabel");
let isDark = true;

themeToggleBtnRef.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIconRef.textContent = "🌙";
    themeLabelRef.textContent = "Dark Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeIconRef.textContent = "☀️";
    themeLabelRef.textContent = "Light Mode";
  }
});
