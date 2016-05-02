---
layout: post
title:  "IBInspectables using Swift"
date:   2016-05-02 13:19:15
categories: posts
tags: featured
image: /assets/article_images/2016-05-02-inspectables-swift/ibspectable_view.png
---
Sometimes writing code over and over again for something can be annoying and tedious. Actually, it's always tedious. If you're one who tends to change an attribute of a __UIKit__ element constantly but you can only do it through code, this post is for you. Let's get started.

__IBInspectables__ are essentially user-defined runtime attributes. To get started, open up a new project in Xcode. Single view application. We are going to create an extension of __UIView__ that will allow us to define an __IBInspectable__ for the cornerRadius. This can also be done with __UIImageView.__
Create a new file in the file hierarchy in Xcode and choose Swift file. Name the file UIView+cornerRadius. Once the file is created, make sure you import UIKit at the top of the file.

Now, add the following code to __UIView+cornerRadius.swift__:
{% highlight swift %}
  extension UIView {
    @IBInspectable var cornerRadius: CGFloat {
      get {
        return layer.cornerRadius
      }
      set {
        layer.cornerRadius = newValue
      }
    }
  }
{% endhighlight %}

Here we create an extension of __UIView__. We then define the __IBInspectable__ and its get and set methods.

Now if you go into Main.storyboard and drag a __UIView__ onto the screen, in the attributes inspector you will now see a cornerRadius property in which you can set for the __UIView__ you just dragged onto the view.

![image](/assets/article_images/2016-05-02-inspectables-swift/cornerRadius.png)

Run the app in the simulator, and you will now see that you view has a cornerRadius of whatever you chose to set it as.

![image](/assets/article_images/2016-05-02-inspectables-swift/sim_view.png)

Now you can always put that file in any of your projects that you wish to have the cornerRadius property in Interface Builder(storyboard). Here are the quick steps:

1. _Create Swift file in Xcode and import UIKit._
2. _Add the extension code above._
3. _Set the value in attributes inspector in storyboard/Interface Builder._

I hope you enjoyed this post, if you got something out of it please share with others.

> "Simplicity is the ultimate sophistication." - Da Vinci
