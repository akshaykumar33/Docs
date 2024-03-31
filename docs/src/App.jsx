import './App.css'
import { vo } from './db';
import { useNavigate } from "react-router-dom";
function App() {
  
  const navigate = useNavigate();
  return (
    <>
        
        <header className="card">
       <h1> API Contract - XFlix</h1>
       <button onClick={()=>navigate('/miniprojects')}>Click to view Mini Projects</button>
      </header>
      <nav>
       Click this API to use: <a href="https://akshaykumarpatil33-me-buildout-xflix.onrender.com">https://akshaykumarpatil33-me-buildout-xflix.onrender.com</a>
      </nav>
      <main>
      <h5>Video Object Structure of a video object returned from the backend</h5>
<code>{JSON.stringify(vo[0])}</code>
<table border="1" cellPadding="5" >
  <tr>
    <th>Property</th>
    <th>Description</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>id</td>
    <td>Unique id of the object</td>
    <td></td>
  </tr>
  <tr>
    <td>videoLink</td>
    <td>Embed link for the video</td>
    <td>Should be in the youtube.com/embed/&lt;youtube-video-id&gt; format for YouTube videos</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Title of the video</td>
    <td></td>
  </tr>
  <tr>
    <td>genre</td>
    <td>Video genre</td>
    <td>Must be one of ["Education", "Sports", "Movies", "Comedy", "Lifestyle", “All” ]</td>
  </tr>
  <tr>
    <td>contentRating</td>
    <td>Video age rating</td>
    <td>Musts be one of [“Anyone”, "7+", "12+", "16+", "18+"]</td>
  </tr>
  <tr>
    <td>releaseDate</td>
    <td>Video release date</td>
    <td>Can be set to any date when uploading. <b>No functionality difference in setting a video’s release date to past or future.</b></td>
  </tr>
  <tr>
    <td>previewImage</td>
    <td>Thumbnail image link for the video</td>
    <td></td>
  </tr>
  <tr>
    <td>votes</td>
    <td>Upvotes/downvotes for a video</td>
    <td>Behaviour will be like Medium claps -<b> a user can upvote/downvote any number of times</b></td>
  </tr>
  <tr>
    <td>upVotes</td>
    <td>Count of upvotes for a video</td>
    <td></td>
  </tr>
  <tr>
    <td>downVotes</td>
    <td>Count of downvotes for a video</td>
    <td></td>
  </tr>
  <tr>
    <td>viewCount</td>
    <td>Number of times the video was viewed</td>
    <td></td>
  </tr>
</table>
      </main>
      <section>
     <h3>API Endpoints</h3> 
<h4>GET /v1/videos</h4>
 <p>Get all available video objects. Also supports : </p>
 <ul type="bullet">
 <li> Filtering by 
<ol type="1">
    <li>
    title
    </li>
    <li>genre</li>
    <li>contentRating</li>
  </ol>
  </li>
  <li>
  Sorting in <b>descending order</b> by

  <ol type="1">
<li>releaseDate(default selected)</li>
<li>viewCount</li>
    </ol>
  </li>
 </ul>
 <table border="1" cellPadding="5">
  <tr>
    <th>Example URL (GET /v1/videos)</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos</td>
    <td>Return all available videos</td>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos?title=top</td>
    <td>Return videos with “top” in its title</td>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos?genres=Education</td>
    <td>Return videos belonging to “Education” genre</td>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos?genres=Education,Sports</td>
    <td>Return videos belonging to “Education” or “Sports” genre
      <b>Note: If “All” is one of the genres, then all the videos will be returned</b>
    </td>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos?contentRating=12%2B</td>
    <td>Return videos with “contentRating” set to 12+ or lower (%2B is “+”  encoded-<a href="https://stackoverflow.com/questions/25807515/encode-special-characters-to-pass-in-url-and-read-by-javascript"> Reference</a>)
    <b>Note: All videos of 12+ or lower rating will be returned i.e, videos of content rating - “Anyone”, “7+”, “12+”</b>
    </td>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos?title=top&genres=Education&contentRating=12%2B</td>
    <td>Get videos with "top" in title, Education as genre & 12+ or lower content rating</td>
  </tr>
  <tr>
    <td>&lt;ip&gt;:&lt;port&gt;/v1/videos?sortBy=viewCount</td>
    <td>Sort the videos returned by “viewCount” values in descending order. Another valid option is “releaseDate”.</td>
  </tr>
</table>
<h4>Response</h4>
      <ol type='1'>
        <ol type="a">
         <li>Status code - 200</li>
         <li>Body</li>
        </ol>
      </ol>
      <code>{JSON.stringify(vo[1])}</code>
      </section>
      <section>
      <h4>GET /v1/videos/:videoId</h4>
<p>Get the video object for a specific video</p>
      <h4>Response</h4>
      <ol type='1'>
       <li>On success, <ol type="a">
         <li>Status code - 200</li>
         <li>Body</li>
        </ol>
        </li>
      </ol>
      <code>{JSON.stringify(vo[2])}</code>
      </section>

      <section>
      <h4>POST /v1/videos</h4>
<p>Create a new video object</p>
      <h4>Request</h4>
      <ol type='1'>
        <ol type="a">
         <li>Body</li>
        </ol>
      </ol>
      <code>{JSON.stringify(vo[3])}</code>
      <b>Note: videoLink should follow this format for iFrame to render the video correctly - "youtube.com/embed/&lt;video-id&gt;"</b>
      <h4>Response</h4>
      <ol type="1">
      <li>On success - all of the 6 fields are present in the request body</li>
        <ol type="a">
         <li>Status code - 201</li>
         <li>Response - video object created for the uploaded video</li>
        </ol>
        <code>{JSON.stringify(vo[4])}</code>
        <li>
        On failure - any of the 6 fields are missing in the request body
          <ol type="a">
         <li>Status code - 400</li>
         <li>Response - error object</li>
        </ol>
        </li>
        <code>{JSON.stringify(vo[5])}</code>
      </ol>
      
      </section>
      <section>
      <h4>PATCH /v1/videos/:videoId/votes</h4>
<p>Update upVote or downVote value by 1 for a video
</p>
<h4>Request</h4>
      <p>Request body fields</p>
        <ul type="bullet">
         <li><b>vote</b> - upVote/downVote</li>
         <li><b>change</b> - increase/decrease</li>
        </ul>
    <p>Eg:</p>
    <ol type="1">
      <li>
        Upvote
        </li><ol type="a">
        Body
        
        </ol>
        <code>{JSON.stringify(vo[6])}</code>
        <li>
          Downvote
        <ol type="a">
        Body
        </ol>
        <code>{JSON.stringify(vo[7])}</code>
        </li>
      </ol> 
      <h4>Response</h4>
      <ol type='1'>
        <li>On success, if “vote” is either of ["upVote", "downVote"] and “change” is either of ["increase", "decrease"], as well as both fields, are present
        <ol type="a">
        <li>Status code - 204</li>
        
       </ol>
</li>
        <li>On failure
       <ol type="a">
        <li>Status code - 400</li>
        <li>Response</li>
       </ol>
       <p>Eg: When “vote” field is missing</p>
       </li>
       <code>{JSON.stringify(vo[8])}</code>
      </ol>
      </section>
      <section>
        <h4>PATCH /v1/videos/:videoId/views</h4>
        <p>Increase the viewCount value of a video by 1</p>
      <h4>Response</h4>
      <ol type='1'>
        <li>On success, if video id is of the correct format
        <ol type="a">
        <li>Status code - 204</li>
        
       </ol>
</li>
        <li>On failure
       <ol type="a">
        <li>Status code - 400</li>
        <li>Response</li>
       </ol>
       <p>Eg: When videoId format is incorrect</p>
       </li>
       <code>{JSON.stringify(vo[9])}</code>
      </ol>
      </section>
      <footer>
        <a href="https://drive.google.com/file/d/1t2jLSdwXwwaCBFb4s2Lnk_Lc_TxY9Yrk/view">Click to download Test Collections for Postman</a>
        <button onClick={()=>navigate('/miniprojects')}>Click to view Mini Projects</button>
      </footer>
    </>
  )
}

export default App
