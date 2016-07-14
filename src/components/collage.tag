<collage>
  <div class="container">
    <div class="empty">
      <span id="collage"></span>
      <br />
      <button class="btn btn-block" onclick={ exportImage }>Export Image</button>
    </div>
  </div>

  <script>
    this.on('mount', () => {
      console.log('Collage component mounted');
      opts.trigger('mounted', document);

      opts.trigger('addImage', 'MEA8SRTIVA7JE6SH', 0);
      opts.trigger('addImage', '91RRSPSC0ITDHNIR', 1);
      opts.trigger('addImage', '4TEE736PM5SPCA76', 2);
    });

    exportImage () {
        console.log('export image');
        opts.trigger('exportImage');
    }
  </script>
</collage>
