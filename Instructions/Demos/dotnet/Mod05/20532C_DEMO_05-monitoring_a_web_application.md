# Module 5: Designing Cloud Applications for Resiliency

# Demo: Monitoring a Web Application

1. On the Start screen, locate and click the **Visual Studio 2015** tile.

  > **Note:** You might have to use the down arrow to locate the Visual Studio 2015 tile on your Start screen.

1.  On the **File** menu, point to **New**, and then click **Project**.

1.  In the **New Project** dialog box that displays, perform the following steps:

	a.  Expand **Templates**, expand **Visual C\#**, and then click **Web**.

	b.  Click **ASP.NET Web Application**.

	c.  In the **Name** box, type **Contoso.Help**.

	d.  In the **Location** box, type **F:\\Mod05\\Democode**.

	e.  Ensure that the **Add Application Insights to Project** check box is selected.

    > If you are not already signed in to your Azure account, you will be prompted to sign in at this point.

	a.  In the **Send telemetry to** list, select **New Application Insights resource**.

	b.  Click **OK**.

1.  In the **New ASP.NET Project** dialog box, perform the following steps:

	a.  In the templates list, click **MVC**.

	b.  Click **Change Authentication**.

	c.  In the **Change Authentication** dialog box, select **No Authentication**, and then click **OK**.

	d.  In the **Microsoft Azure** section, ensure that the **Host in the cloud** check box is selected.

	e.  In the **Microsoft Azure** section, ensure that the **App Service** option is selected in the **Host in the cloud** list.

	f.  Click **OK**.

1.  In the **Create App Service** dialog box, perform the following steps:

	a.  Do not modify the randomly-generated Web App name.

			> **Note:** Values for Resource Group, Subscription and App Service Plan should already be selected. You can modify these selections if you wish.

	b.	Click the **New** button in the **App Service Plan** section.
	
  c.	In the **Configure App Service Plan** dialog, click the **OK** button.

	d.  Back in the **Create App Service** dialog box, click the **Create** button.

1.  In the **Solution Explorer** pane, expand the **Contoso.Help** project, expand the **Controllers** folder, and then double-click the **HomeController.cs** file.

1.  Type the following lines of code at the top of the file:

	```
	using System.Net;

	using System.Threading;
	```

1.  In the **About** method, replace the following line of code:

	```
	return View();
	```

	with this line of code:

	```
	return new HttpStatusCodeResult(HttpStatusCode.InternalServerError);
	```

1.  In the **Contact** method, locate the following line of code:

	```
	ViewBag.Message = "Your contact page.";
	```

1.  Place the cursor at the end of the above line of code, press Enter, and then type the following code:

	```
	Thread.Sleep(TimeSpan.FromSeconds(5d));
	```

1.  In the **Solution Explorer** pane, right-click the **Contoso.Help** project, and then click **Publish**.

1.  In the **Publish Web** dialog box that displays, perform the following steps:

	a.  Click **Validate Connection**.

	b.  Wait until the connection is successfully validated. You will see a green check mark after the validation is complete.

	c.  Click **Publish**.

1.  In the new Internet Explorer tab, verify that your website is successfully published.

1.  At the top of your Website, click **Contact**.

1.  At the top of your Website, click **About**.

1.  After you see the **HTTP 500 Internal Server Error** help page, click the back button in the browser to return to the previous page.

1.  At the top of your Website, click **Home**.

1.  In a new Internet Explorer tab, go to the Azure Preview Portal ([*https://portal.azure.com*](https://portal.azure.com)).

1.  In the email address box, type the email address of your Microsoft account

1.  Click **Continue**.

1.  In the password box, type the password for your Microsoft account.

1. Click **Sign In**.

1. If prompted with the **Welcome to Microsoft Azure** dialog, click **Get Started**.

1. In the navigation pane on the left side of the screen, scroll down, and then click **More Services**.

1. In the **Browse** blade that displays, click **App Services**.

1. In the **App Services** blade that displays, click the App Service instance that you just created.

1. In the App Service blade that displays, click **App Service Plan**.

1. In the App Service Plan blade that displays, click **Scale Up (App Service Plan)**.

1. In the **Choose your pricing** tier blade that displays, do the following:

	a.  Select the **B1 Basic** option.

	b.  Click the **Select** button.

1.  In the navigation pane on the left side of the screen, scroll down, and then click **More Services**.

1.  Click **Application Insights**.

1.  In the new **Application Insights** blade that displays, click your **Web App** instance and view the tiles and dashboard.

1.	Scroll down and click the **Web tests** title.

1.	In the **All webtests response time (ms)** tile, click **Add web test** button.

1.  In the **Create test** blade that displays, perform the following steps:

	a.  In the **Test** **Name** box, type any valid value.

	b.  In the **Url** box, type the URL for your newly created **Website** instance. You can find this URL in the browser tab that is currently displaying your Website.

	c.  Click **Test Locations**.

	d.  In the **Test locations** blade that displays, ensure that at least one test location, which is not in the country that you currently reside, is selected, and then click **OK**.

	e.  Click the **Alerts** option.

	f.  In the **Alerts** blade that displays, ensure that the **Disabled** option is selected in the **Status** toggle, and then click **OK**.

	g.  Click **Create** to create the new web test.

    > At this point, others can visit your webpage so that you can see more requests on your dashboard. However, this is optional. Typically after five to ten minutes, you will see the first pass or fail status for your newly created web test. If you want, you can view the result.
