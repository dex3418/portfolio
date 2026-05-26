from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Project, Skill, Workshop, BlogPost, Testimonial
from .forms import ContactForm

def home(request):
    projects = Project.objects.filter(featured=True)[:4]
    skills = Skill.objects.all()
    testimonials = Testimonial.objects.filter(active=True)[:6]
    workshops = Workshop.objects.filter(active=True)[:3]
    recent_posts = BlogPost.objects.filter(published=True)[:3]

    skill_categories = {}
    for skill in skills:
        cat = skill.get_category_display()
        skill_categories.setdefault(cat, []).append(skill.name)

    context = {
        'projects': projects,
        'skill_categories': skill_categories,
        'testimonials': testimonials,
        'workshops': workshops,
        'recent_posts': recent_posts,
        'contact_form': ContactForm(),
    }
    return render(request, 'main/home.html', context)

def projects(request):
    all_projects = Project.objects.all()
    return render(request, 'main/projects.html', {'projects': all_projects})

def workshops(request):
    all_workshops = Workshop.objects.filter(active=True)
    return render(request, 'main/workshops.html', {'workshops': all_workshops})

def blog(request):
    posts = BlogPost.objects.filter(published=True)
    return render(request, 'main/blog.html', {'posts': posts})

def blog_detail(request, slug):
    post = get_object_or_404(BlogPost, slug=slug, published=True)
    return render(request, 'main/blog_detail.html', {'post': post})

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Message sent! I'll get back to you soon.")
            return redirect('contact')
        else:
            messages.error(request, "Please fix the errors below.")
    else:
        form = ContactForm()
    return render(request, 'main/contact.html', {'form': form})
