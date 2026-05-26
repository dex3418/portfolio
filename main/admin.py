from django.contrib import admin
from .models import Project, Skill, Workshop, BlogPost, Testimonial, ContactMessage

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'featured', 'order']
    list_editable = ['featured', 'order']
    search_fields = ['title']

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'order']
    list_editable = ['order']
    list_filter = ['category']

@admin.register(Workshop)
class WorkshopAdmin(admin.ModelAdmin):
    list_display = ['title', 'duration', 'audience', 'active', 'order']
    list_editable = ['active', 'order']

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'published', 'created_at']
    list_editable = ['published']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title']

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'active', 'order']
    list_editable = ['active', 'order']

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'received_at', 'read']
    list_editable = ['read']
    readonly_fields = ['name', 'email', 'subject', 'message', 'received_at']
