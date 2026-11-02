/* ======================================================
    Lab 7 - PostGrid.jsx
====================================================== */

import PostCard from "./PostCard.jsx";

export default function PostGrid({ posts, onLike, onDislike }) {
    return (
        <div className="grid" id="posts">
            {posts.map((post) => (
                // Render one PostCard for each post
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={onLike}
                    onDislike={onDislike}
                />
            ))}
        </div>
    );
}