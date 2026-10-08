import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

def create_hero_frames():
    os.makedirs('public/frames/hero', exist_ok=True)
    os.makedirs('public/images', exist_ok=True)

    # 1. Load source mascot image
    source_path = 'public/images/cat-logo-transparent.png'
    if not os.path.exists(source_path):
        source_path = 'public/images/logo.png'
    
    cat_img = Image.open(source_path).convert('RGBA')
    
    # Crop transparent borders to get clean bounding box
    bbox = cat_img.getbbox()
    if bbox:
        cat_img = cat_img.crop(bbox)
        
    # Standardize mascot size
    target_h = 310
    target_w = int(cat_img.width * (target_h / cat_img.height))
    cat_img = cat_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Create Back Face (Cybernetic Obsidian Core with RL monogram & gold circuits)
    back_face = Image.new('RGBA', (target_w, target_h), (0, 0, 0, 0))
    back_draw = ImageDraw.Draw(back_face)
    
    # Outer shield shape
    pad = 12
    back_draw.rounded_rectangle(
        [pad, pad, target_w - pad, target_h - pad],
        radius=36,
        fill=(18, 20, 26, 255),
        outline=(212, 154, 83, 230),
        width=3
    )
    
    # Inner gold border
    back_draw.rounded_rectangle(
        [pad + 10, pad + 10, target_w - pad - 10, target_h - pad - 10],
        radius=26,
        fill=(13, 14, 18, 255),
        outline=(247, 225, 188, 120),
        width=1
    )
    
    # Cybernetic circuit accents on back
    center_x = target_w // 2
    center_y = target_h // 2
    
    # Glowing ring in center of back
    back_draw.ellipse(
        [center_x - 55, center_y - 55, center_x + 55, center_y + 55],
        outline=(212, 154, 83, 220),
        width=2
    )
    back_draw.ellipse(
        [center_x - 42, center_y - 42, center_x + 42, center_y + 42],
        outline=(247, 225, 188, 160),
        width=1
    )
    
    # Circuit traces
    back_draw.line([center_x, pad + 20, center_x, center_y - 55], fill=(212, 154, 83, 180), width=2)
    back_draw.line([center_x, center_y + 55, center_x, target_h - pad - 20], fill=(212, 154, 83, 180), width=2)
    back_draw.line([pad + 20, center_y, center_x - 55, center_y], fill=(212, 154, 83, 180), width=2)
    back_draw.line([center_x + 55, center_y, target_w - pad - 20, center_y], fill=(212, 154, 83, 180), width=2)
    
    # Dots on circuit nodes
    for pt in [(center_x, pad + 20), (center_x, target_h - pad - 20), (pad + 20, center_y), (target_w - pad - 20, center_y)]:
        back_draw.ellipse([pt[0]-4, pt[1]-4, pt[0]+4, pt[1]+4], fill=(247, 225, 188, 255))
        
    # Monogram "RL" in center
    back_draw.text((center_x - 18, center_y - 14), "RL", fill=(247, 225, 188, 255))
    back_draw.text((center_x - 48, center_y + 70), "ROMERO LABS", fill=(212, 154, 83, 200))

    # Pre-generate 30 deterministic 3D orbit particles
    random.seed(42)
    particles = []
    for _ in range(35):
        rad = random.uniform(160, 260)
        angle_init = random.uniform(0, 2 * math.pi)
        height = random.uniform(-140, 140)
        speed = random.choice([1.0, 1.2, -1.0, -0.8])
        p_size = random.uniform(2.0, 4.5)
        particles.append({
            'rad': rad,
            'angle': angle_init,
            'height': height,
            'speed': speed,
            'size': p_size,
            'alpha': random.randint(140, 255)
        })

    num_frames = 60
    frame_images = []

    print(f"Generating {num_frames} audiovisual 3D scrollytelling frames...")

    for f in range(num_frames):
        theta = (2 * math.pi * f) / num_frames  # 0 to 2pi
        deg = (360.0 * f) / num_frames
        
        # Canvas 600x600 in Obsidian Black (#090a0f)
        canvas = Image.new('RGBA', (600, 600), (9, 10, 15, 255))
        draw = ImageDraw.Draw(canvas)
        
        # 1. Ambient Volumetric Radial Glow in center
        glow_layer = Image.new('RGBA', (600, 600), (0, 0, 0, 0))
        glow_draw = ImageDraw.Draw(glow_layer)
        # Warm caramel center glow
        glow_draw.ellipse([150, 120, 450, 420], fill=(212, 154, 83, 38))
        glow_draw.ellipse([210, 180, 390, 360], fill=(247, 225, 188, 30))
        glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(40))
        canvas.paste(glow_layer, (0, 0), glow_layer)
        
        # 2. Holographic Pedestal at Bottom (Perspective Ellipses)
        pedestal_y = 485
        # Outer ring
        draw.ellipse([100, pedestal_y - 35, 500, pedestal_y + 35], outline=(38, 41, 51, 160), width=1)
        # Active gold energy ring
        draw.ellipse([140, pedestal_y - 25, 460, pedestal_y + 25], outline=(212, 154, 83, 140), width=2)
        # Inner core
        draw.ellipse([190, pedestal_y - 15, 410, pedestal_y + 15], outline=(247, 225, 188, 180), width=1)
        
        # Orbiting ticks on pedestal ring
        for t_idx in range(12):
            tick_ang = theta + (t_idx * (math.pi / 6))
            tx = 300 + 160 * math.cos(tick_ang)
            ty = pedestal_y + 25 * math.sin(tick_ang)
            draw.ellipse([tx - 2, ty - 1.5, tx + 2, ty + 1.5], fill=(212, 154, 83, 220))

        # Dynamic shadow on pedestal
        shadow_w = int(120 * (0.6 + 0.4 * abs(math.cos(theta))))
        shadow_h = 20
        shadow_layer = Image.new('RGBA', (600, 600), (0, 0, 0, 0))
        s_draw = ImageDraw.Draw(shadow_layer)
        s_draw.ellipse([300 - shadow_w, pedestal_y - shadow_h // 2, 300 + shadow_w, pedestal_y + shadow_h // 2], fill=(0, 0, 0, 160))
        shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(10))
        canvas.paste(shadow_layer, (0, 0), shadow_layer)

        # 3. 3D Particles - Background layer (Z < 0)
        for p in particles:
            p_ang = p['angle'] + (theta * p['speed'])
            pz = p['rad'] * math.sin(p_ang)
            if pz < 0:
                px = 300 + p['rad'] * math.cos(p_ang)
                py = 280 + p['height']
                p_r = p['size'] * 0.7
                alpha = int(p['alpha'] * 0.5)
                draw.ellipse([px - p_r, py - p_r, px + p_r, py + p_r], fill=(212, 154, 83, alpha))

        # 4. Floating 3D Subject (Levitation sinusoidal oscillation)
        levitation = 10 * math.sin(theta * 2)
        center_x = 300
        center_y = int(270 + levitation)
        
        cos_t = math.cos(theta)
        sin_t = math.sin(theta)
        
        # Current width projected in 3D
        curr_w = max(4, int(target_w * abs(cos_t)))
        is_front = (cos_t >= 0)
        
        # Extrusion / 3D Bevel Rim (shows depth when turning)
        extrusion_w = int(20 * abs(sin_t))
        if extrusion_w > 1:
            edge_x_offset = int((curr_w // 2) * (1 if sin_t > 0 else -1))
            edge_start_x = center_x + edge_x_offset - (extrusion_w if sin_t > 0 else 0)
            
            # Gold metallic gradient rim
            rim_layer = Image.new('RGBA', (extrusion_w, target_h), (0, 0, 0, 0))
            rim_draw = ImageDraw.Draw(rim_layer)
            for ry in range(target_h):
                gold_val = int(180 + 75 * math.sin(ry * 0.05 + theta))
                rim_draw.line([0, ry, extrusion_w, ry], fill=(gold_val, int(gold_val * 0.73), int(gold_val * 0.4), 230))
            rim_mask = Image.new('L', (extrusion_w, target_h), 220)
            canvas.paste(rim_layer, (edge_start_x, center_y - target_h // 2), rim_mask)

        # Choose front or back
        active_face = cat_img if is_front else back_face
        
        # Scale face horizontally for perspective
        scaled_face = active_face.resize((curr_w, target_h), Image.Resampling.LANCZOS)
        
        # Dynamic Studio Lighting on Mascot:
        # Facing light angle -> brighter; edge-on -> deeper
        light_dot = 0.75 + 0.35 * abs(cos_t)
        enhancer = ImageEnhance.Brightness(scaled_face)
        scaled_face = enhancer.enhance(light_dot)
        
        # Specular flare sweep when passing front 30° / 330°
        if is_front and abs(cos_t) > 0.8:
            flare_prog = (math.sin(theta) + 1.0) / 2.0  # 0 to 1
            flare_x = int(curr_w * flare_prog)
            flare_w = max(4, int(curr_w * 0.15))
            f_overlay = Image.new('RGBA', scaled_face.size, (0, 0, 0, 0))
            f_draw = ImageDraw.Draw(f_overlay)
            f_draw.rectangle([flare_x - flare_w, 0, flare_x + flare_w, target_h], fill=(255, 245, 220, 60))
            f_overlay = f_overlay.filter(ImageFilter.GaussianBlur(6))
            scaled_face = Image.alpha_composite(scaled_face, f_overlay)

        # Paste Mascot onto canvas
        paste_x = center_x - curr_w // 2
        paste_y = center_y - target_h // 2
        canvas.paste(scaled_face, (paste_x, paste_y), scaled_face)

        # 5. 3D Particles - Foreground layer (Z >= 0) with glowing halos
        for p in particles:
            p_ang = p['angle'] + (theta * p['speed'])
            pz = p['rad'] * math.sin(p_ang)
            if pz >= 0:
                px = 300 + p['rad'] * math.cos(p_ang)
                py = 280 + p['height']
                p_r = p['size'] * 1.2
                # Glow halo
                draw.ellipse([px - p_r * 2.2, py - p_r * 2.2, px + p_r * 2.2, py + p_r * 2.2], fill=(212, 154, 83, 70))
                # Bright gold core
                draw.ellipse([px - p_r, py - p_r, px + p_r, py + p_r], fill=(247, 225, 188, p['alpha']))

        # 6. High-Tech Audiovisual HUD Overlay (Framing Brackets & Telemetry)
        bracket_color = (212, 154, 83, 110)
        # Top-Left Bracket
        draw.line([25, 25, 55, 25], fill=bracket_color, width=2)
        draw.line([25, 25, 25, 55], fill=bracket_color, width=2)
        # Top-Right Bracket
        draw.line([575, 25, 545, 25], fill=bracket_color, width=2)
        draw.line([575, 25, 575, 55], fill=bracket_color, width=2)
        # Bottom-Left Bracket
        draw.line([25, 575, 55, 575], fill=bracket_color, width=2)
        draw.line([25, 575, 25, 545], fill=bracket_color, width=2)
        # Bottom-Right Bracket
        draw.line([575, 575, 545, 575], fill=bracket_color, width=2)
        draw.line([575, 575, 575, 545], fill=bracket_color, width=2)
        
        # Technical Readouts
        draw.text((32, 34), f"ROT: {int(deg):03d}° // ORBIT 360", fill=(212, 154, 83, 200))
        draw.text((32, 548), f"FRAME: [{f+1:02d}/60] SCROLL_SYNC", fill=(161, 161, 170, 180))
        draw.text((450, 34), "FPS: 60 • 4K READY", fill=(161, 161, 170, 180))
        draw.text((435, 548), "ROMERO LABS • V2.6", fill=(212, 154, 83, 200))

        # Save single frame as WebP
        frame_filename = f"public/frames/hero/frame_{f:02d}.webp"
        canvas.save(frame_filename, 'WEBP', quality=88)
        frame_images.append(canvas.convert('RGB'))

    # Compile smooth looping animated WebP (fallback / idle video)
    print("Compiling hero-spin-loop.webp...")
    frame_images[0].save(
        'public/images/hero-spin-loop.webp',
        'WEBP',
        save_all=True,
        append_images=frame_images[1:],
        duration=40,  # 40ms = 25fps smooth
        loop=0,
        quality=85
    )
    print("All frames and hero-spin-loop.webp generated successfully!")

if __name__ == '__main__':
    create_hero_frames()
