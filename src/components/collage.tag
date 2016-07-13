<collage>
  <div class="container">
    <h1>Collage</h1>
    <hr />
    <span id="collage"></span>
  </div>

  <script>
    this.on('mount', () => {
      console.log('Collage component mounted');
      opts.trigger('mounted', document);

      opts.trigger('addImage', 'MEA8SRTIVA7JE6SH', 1);
      opts.trigger('addImage', '91RRSPSC0ITDHNIR', 2);
      opts.trigger('addImage', '4TEE736PM5SPCA76', 3);
    });
  </script>
</collage>
