import React from 'react';

const DiscussionBoard = () => {
  return(
    <div>
      <div id="disqus_thread"></div>
      <script>
      {(function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://coronavirus-5.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })()}
      </script>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      <script id="dsq-count-scr" src="//coronavirus-5.disqus.com/count.js" async></script>
    </div>
  )
}

export default DiscussionBoard