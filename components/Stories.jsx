import ItemStoryCard from "./ItemStoryCard"

const stories = [
  {
    name: "Abdulrahamn",
    src: "/images/abdo-story.jpg",
    profile: "/images/abdo.png",
  },
  {
    name: "Sonny Sangha",
    src: "/images/sonny-story.jpeg",
    profile: "/images/sonny.jpg",
  },
  {
    name: "Mark Zuckerburg",
    src: "/images/mark-story.png",
    profile: "/images/mark.jpg",
  },
  {
    name: "Sonny Sangha",
    src: "/images/musk-story.jpg",
    profile: "/images/musk.jpg",
  },
  {
    name: "Sonny Sangha",
    src: "/images/jeff-story.jpg",
    profile: "/images/jeff.jpeg",
  },
  
]

const Stories = ()=> {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, i) => (
        <ItemStoryCard
          key={i}
          story={story}
        />
      ))}
    </div>
  );
}

export default Stories
