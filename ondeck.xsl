<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:param name="today"/>
<xsl:template match="/">
	<h2>On Deck</h2>
	<xsl:if test="count(hackathons/hackathon[end >= $today]) = 0">
	<p>No events/classes found at this time. If you know of any, click the link below.</p>
	</xsl:if>
	<xsl:for-each select="hackathons/hackathon">
		<xsl:sort select="end" order="ascending"/>
			<xsl:if test="end >= $today">
				<div style="border-top: solid 1px #bbb;padding:15px 0 25px 0;">
				<xsl:if test="food != ''">
					<div class="food">
					<xsl:value-of select="food"/>
					</div>
				</xsl:if>
				<xsl:if test="prize != ''">
					<div class="prize">
					<xsl:value-of select="prize"/>
					</div>
				</xsl:if>
				<a href="{url}" class="event" target="_blank">
				<b><xsl:value-of select="name"/></b>
				</a><br/>
				<font class="details">
				<xsl:value-of select="substring(start/text(),1,4)"/>-<xsl:value-of select="substring(start/text(),5,2)"/>-<xsl:value-of select="substring(start/text(),7,2)"/>
				 to 
				<xsl:value-of select="substring(end/text(),1,4)"/>-<xsl:value-of select="substring(end/text(),5,2)"/>-<xsl:value-of select="substring(end/text(),7,2)"/>
				<xsl:if test="location != ''">
				 (<xsl:value-of select="location"/>)
				</xsl:if>
				</font>
				<p><xsl:value-of select="description"/><br/><span style="float:right;padding:5px;"><a href="{url}" class="visit" target="_blank">visit site</a></span></p>
				</div>
			</xsl:if>
	</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
