/* ======================================================
    Lab 7 - Header.jsx
    
    Shows the site title, a one-sentence description,
    and summary numbers: totalPosts, totalLikes, totalDislikes.
====================================================== */

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
    return (
        <header className="header">
            <div>
                <h1>GridBlog</h1>
                <p>A simple React blog where you can share posts and react to them.</p>
            </div>

            <div className="headerStats">
                <span>Posts: {totalPosts}</span>
                <span>👍 Likes: {totalLikes}</span>
                <span>👎 Dislikes: {totalDislikes}</span>
            </div>
        </header>
    );
}
