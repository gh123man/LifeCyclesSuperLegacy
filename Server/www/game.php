<html>
<body>

<script type="text/javascript" src="/static/jquery/jquery.js"></script>
<script type="text/javascript" src="/static/js/game.js"></script>

<?php
session_start();
include_once 'node.php';
nodeConnect();

?>


<canvas id="lifeCycles" width="800" height="500"
style="border:1px solid #000000;">
</canvas>

</body>
</html>



