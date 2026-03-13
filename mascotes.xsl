<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes"/>

<xsl:template match="/">
  <html>
  <head>
    <meta charset="UTF-8"/>
    <title>Animals disponibles</title>
    <link rel="stylesheet" href="styles.css"/>
    <style>
      /* Tarjetas de mascotes */
      .pet-card {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        background: #f8fafc;
        box-shadow: 0 6px 18px rgba(12,20,30,0.06);
      }

      /* Imagen rectangular más alta */
      .pet-card img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        display: block;
      }

      .pet-card h4 {
        margin: 12px;
        font-size: 1.2rem;
      }

      .pet-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 12px 12px 12px;
        font-size: 0.95rem;
        color: #6b7280;
      }


      @media (max-width: 720px) {
        .pet-card img {
          height: 250px;
        }
      }
    </style>
  </head>
  <body>
    <div class="pet-grid">
      <xsl:for-each select="mascotes/mascota">
        <div class="pet-card">
          <img>
            <xsl:attribute name="src">images/pets/<xsl:value-of select="@id"/>.jpg</xsl:attribute>
            <xsl:attribute name="alt"><xsl:value-of select="nom"/></xsl:attribute>
          </img>
          <h4><xsl:value-of select="nom"/></h4>
          <div class="pet-meta">
            <span>
              <xsl:value-of select="especie"/> · <xsl:value-of select="raca"/>
            </span>
            <strong><xsl:value-of select="dataNaixement"/></strong>
          </div>
        </div>
      </xsl:for-each>
    </div>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
