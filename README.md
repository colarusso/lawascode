# Law as Code
This repo hosts the [Law as Cose website](http://www.lawascode.org)--a list of past and upcoming legal hackathons/classes involving [QnA Markup](http://www.qnamarkup.org). 

## Adding and Updating Events

If you'd like to add or edit a listing, you have two options:

1. Add to/edit `hackthons.xml`, and make a pull request.
2. Email the details of your addition/edit to the the curator. 

### Make a Pull Request

You can update the listings by editing `hackathons.xml`. To add a listing, add a `hackathon` element inside `hackathons`. For example:

```
<hackathons>

  [other listings (hacathon elements)...]
  
	<hackathon>
		<name>[Name of event]</name>
		<url>[URL of page with event details]</url>
		<start>[start date of the form YYYYMMDD]</start>
		<end>[end date of the form YYYYMMDD]</end>
		<location>[city, state...]</location>
		<prize>[sort description, e.g., '$500 in prizes' or just '$500']</prize>
		<food>[sort description, e.g., 'Pizza']</food>
		<description>[one paragraph desriptions for context]</description>
	</hackathon>
	
</hackathons>
```

The only requiered elements are `name`, `url`, `start`,`end`, and `description`. Once you've made your changes, make a pull request, and if everything looks good, we'll accept the request and update the site. 

### Email the Curator

If you're not comfortable making a pull request, email the information asked for above to [hackathon@qnamarkup.org](mailto:hackathon@qnamarkup.org).
