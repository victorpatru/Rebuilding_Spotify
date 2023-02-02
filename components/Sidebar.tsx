import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <section className="flex flex-col p-3 text-gray-400 text-sm">
      {/* Home Section */}
      <section>
        <section>
          <button className="flex items-center space-x-3 hover:bg-slate-700 p-4 rounded-lg">
            <HomeIcon className="h-4 w-4" />
            <h2>Home</h2>
          </button>
        </section>

        {/* Search Section */}
        <section>
          <button className="flex items-center space-x-3 hover:bg-slate-700 p-4 rounded-lg">
            <MagnifyingGlassIcon className="h-4 w-4" />
            <h2>Search</h2>
          </button>
        </section>

        {/* Your Library Section */}
        <section>
          <button className="flex items-center space-x-3 hover:bg-slate-700 p-4 rounded-lg">
            <BuildingLibraryIcon className="h-4 w-4" />
            <h2>Your Library</h2>
          </button>
        </section>

        {/* Create Playlist Section */}
        <section>
          <button className="flex items-center space-x-3 hover:bg-slate-700 p-4 rounded-lg">
            <PlusCircleIcon className="h-4 w-4" />
            <h2>Create Playlist</h2>
          </button>
        </section>

        {/* Liked Songs Section */}
        <section>
          <button className="flex items-center space-x-3 hover:bg-slate-700 p-4 rounded-lg">
            <HeartIcon className="h-4 w-4" />
            <h2>Liked Songs</h2>
          </button>
        </section>

        {/* Your Episodes Section */}
        <section>
          <button className="flex items-center space-x-3 hover:bg-slate-700 p-4 rounded-lg">
            <GlobeAltIcon className="h-4 w-4" />
            <h2>Your Episodes</h2>
          </button>
        </section>

        {/* Playlists Section */}
        <section className="mt-20">
          <button className="flex items-center space-x-3 p-4 rounded-lg hover:text-white cursor-pointer">
            <h2>Playlist #1</h2>
          </button>
        </section>

        {/* Playlists Section */}
        <section>
          <button className="flex items-center space-x-3 p-4 rounded-lg hover:text-white cursor-pointer">
            <h2>Playlist #2</h2>
          </button>
        </section>

        {/* Playlists Section */}
        <section>
          <button className="flex items-center space-x-3 p-4 rounded-lg hover:text-white cursor-pointer">
            <h2>Playlist #3</h2>
          </button>
        </section>

        {/* Playlists Section */}
        <section>
          <button className="flex items-center space-x-3 p-4 rounded-lg hover:text-white cursor-pointer">
            <h2>Playlist #4</h2>
          </button>
        </section>
      </section>
    </section>
  );
}

export default Sidebar;
