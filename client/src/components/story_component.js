function Story({img_path, id, is_new}) {
    var colored_ring={
        backgroundImage: 'url("assets/images/story_ring_colored.png")',
        textAlign: 'center'
    };
    var noncolored_ring={
        backgroundImage: 'url("assets/images/story_ring_noncolored.png")',
        textAlign: 'center'
    }

    return (
        <div className="story">
            <div className="ring" style={ is_new ? colored_ring : noncolored_ring}>
                <img src={img_path}/>
            </div>
            <span className="id">{id}</span>
        </div>
    );
}

export default Story;