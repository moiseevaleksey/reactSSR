import React from 'react';
import List from './components/list';

const blogs = [
  {
    id: 1,
    title: 'Title1',
    text: 'Text1',
  },
  {
    id: 2,
    title: 'Title2',
    text: 'Text2',
  },
];

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      blogs: blogs,
      filtredBlogs: blogs,
      searchString: '',
      newBlogTitle: '',
      newBlogText: '',
    };
    this.handleSearch = this.handleSearch.bind (this);
    this.handleNewBlogTitle = this.handleNewBlogTitle.bind (this);
    this.handleNewBlogText = this.handleNewBlogText.bind (this);
  }

  handleSearch (e) {
    e.preventDefault ();
    const searchString = e.target.value;
    const blogs = this.state.blogs;

    if (searchString.length > 0) {
      const filtredBlogs = blogs.filter (blog => {
        return (
          blog.title.toLowerCase ().includes (searchString.toLowerCase ()) ||
          blog.text.toLowerCase ().includes (searchString.toLowerCase ())
        );
      });
      this.setState ({filtredBlogs: filtredBlogs, searchString: searchString});
    } else {
      this.setState ({filtredBlogs: blogs, searchString: searchString});
    }
  }

  handleNewBlogTitle (e) {
    e.preventDefault ();
    this.setState ({newBlogTitle: e.target.value});
  }

  handleNewBlogText (e) {
    e.preventDefault ();
    this.setState ({newBlogText: e.target.value});
  }

  addNewBlogToList () {
    console.log ('added');
    const newBlog = {
      id: Date.now (),
      title: this.state.newBlogTitle,
      text: this.state.newBlogText,
    };
    this.setState ({
      blogs: [...this.state.blogs, newBlog],
      filtredBlogs: [...this.state.filtredBlogs, newBlog]
    });
  }

  render () {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={this.handleNewBlogTitle}
            value={this.state.newBlogTitle}
          />
          <input
            type="text"
            placeholder="Text"
            onChange={this.handleNewBlogText}
            value={this.state.newBlogText}
          />
          <input
            type="button"
            value="ADD"
            onClick={this.addNewBlogToList.bind (this)}
          />
        </div>
        <input
          type="search"
          onChange={this.handleSearch}
          value={this.state.searchString}
          placeholder="Search"
        />
        <List blogs={this.state.filtredBlogs} />
      </div>
    );
  }
}

export default App;
