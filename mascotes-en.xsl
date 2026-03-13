<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <head>
    <style>
      body { font-family: 'Inter', sans-serif; margin: 0; display: flex; justify-content: center; background: transparent; }
      .pet-grid { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 
        gap: 20px; 
        width: 100%; 
        padding: 10px;
      }
      .pet-card { 
        background: white; 
        border-radius: 15px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
        overflow: hidden; 
        text-align: center;
        display: flex;
        flex-direction: column;
        height: fit-content;
        border: 1px solid #eee;
      }
      .pet-card img { width: 100%; height: 200px; object-fit: cover; }
      .pet-info { padding: 15px; background: #fff; }
      h4 { margin: 0 0 5px 0; color: #114b8b; font-size: 1.2rem; }
      .meta { font-size: 0.85rem; color: #666; }
    </style>
  </head>
  <body>
    <div class="pet-grid">
      <xsl:for-each select="mascotes/mascota">
        <div class="pet-card">
          <img src="images/pets/{@id}.jpg" alt="{nom}"/>
          <div class="pet-info">
            <h4><xsl:value-of select="nom"/></h4>
            <div class="meta">
              <xsl:value-of select="especie"/> · <xsl:value-of select="raca"/>
            </div>
          </div>
        </div>
      </xsl:for-each>
    </div>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>