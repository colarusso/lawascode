# Law as Code
This repo hosts the [Law as Cose website](http://www.lawascode.org)--a list of past and upcoming legal hackathons/classes involving [QnA Markup](http://www.qnamarkup.org). If you'd like to add a listing, you have two options:

1. Add your listing(s) to `hackthons.xml`, and make a pull request.
2. Email the details for your listing(s) to the the curator. 

## Make a Pull Request

You can update the list by making an addition to `hackathons.xml`. Just add a `hackathon` element inside `hackathons`. For example:

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

The only requiered elements are `name`, `url`, `start`,`end`, and `description`. Once you've added your event(s), make a pull request, and if everything looks good, we'll accept the request and update the site. 

## Email the Curator

If you're not comfortable making a pull request, email the information asked for above to [hackathon@qnamarkup.org](mailto:hackathon@qnamarkup.org).
